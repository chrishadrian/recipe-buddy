/* eslint-disable no-console */
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore';
import app from './firebase';
import { generateUserID } from '../hasher';

// firestore
const db = getFirestore(app);

const createUserDocument = async (user) => {
	const userID = generateUserID(user);

	const userDocRef = doc(db, 'users', userID);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				...user,
				createdAt,
			});
		} catch (error) {
			console.error('Error creating the user', error.message);
		}

		return true;
	}

	return false;
};

const getUserDocument = async (user) => {
	const userID = generateUserID(user);

	const userDocRef = doc(db, 'users', userID);
	const userSnapshot = await getDoc(userDocRef);

	return userSnapshot.data();
};

const createSubCollectionDocument = async (user, subCollection, subDocument) => {
	const createdAt = new Date();
	const userID = generateUserID(user);

	const docRef = doc(db, 'users', userID, subCollection, subDocument.id);
	const snapshot = await getDoc(docRef);

	if (!snapshot.exists()) {
		try {
			await setDoc(docRef, {
				...subDocument,
				createdAt,
			});
		} catch (error) {
			console.error('Error creating user document', error.message);
		}

		return true;
	}

	return false;
};

const getSubCollectionDocuments = async (user, subCollection) => {
	const userID = generateUserID(user);
	const documents = [];

	const subCollectionRef = collection(db, 'users', userID, subCollection);
	const q = query(subCollectionRef);
	const querySnapshot = await getDocs(q);

	querySnapshot.forEach((data) => {
		documents.unshift(data.data());
	});

	return documents;
};

export { createUserDocument, getUserDocument, createSubCollectionDocument, getSubCollectionDocuments };
