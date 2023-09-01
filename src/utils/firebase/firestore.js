/* eslint-disable no-console */
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import app from './firebase';
import { generateUserID } from '../hasher';

// firestore
const db = getFirestore(app);

const createUserDocument = async (collectionID, document) => {
	const userDocRef = doc(db, collectionID, document.id);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				...document,
				createdAt,
			});
		} catch (error) {
			console.error('Error creating the user', error.message);
		}

		return true;
	}

	return false;
};

const getUserDocument = async (collectionID, document) => {
	const userDocRef = doc(db, collectionID, document.id);
	const userSnapshot = await getDoc(userDocRef);

	return userSnapshot;
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

export { createUserDocument, getUserDocument, createSubCollectionDocument };
