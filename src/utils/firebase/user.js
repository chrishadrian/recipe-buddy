import { generateUserID } from '../hasher';
import { createUserDocument } from './firestore';

const addNewUser = async (user) => {
	const { name, email, locale } = user;

	const userDoc = {
		id: generateUserID(user),
		name,
		email,
		locale,
	};

	const userDocRef = await createUserDocument(userDoc);

	return userDocRef;
};
export default addNewUser;
