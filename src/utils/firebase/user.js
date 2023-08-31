import generateUserID from '../hasher';
import { createFirestoreDocument } from './firestore';

const addNewUser = async (user) => {
	const { name, email, locale } = user;

	const userDoc = {
		id: generateUserID(user),
		name,
		email,
		locale,
	};

	const userDocRef = await createFirestoreDocument('users', userDoc);

	return userDocRef;
};
export default addNewUser;
