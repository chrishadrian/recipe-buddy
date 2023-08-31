import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import app from './firebase';

// firestore
const db = getFirestore(app);

const createFirestoreDocument = async (collectionID, document) => {
	const userDocRef = doc(db, collectionID, document.id);
	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// check if the data exists in the database
	// console.log(userSnapshot.exists());

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

const getFirestoreDocument = async (collectionID, document) => {
	const userDocRef = doc(db, collectionID, document.id);
	const userSnapshot = await getDoc(userDocRef);

	return userSnapshot;
};

export { createFirestoreDocument, getFirestoreDocument };
