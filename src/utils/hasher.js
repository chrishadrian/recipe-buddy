import getUuidByString from 'uuid-by-string';

export default function generateUserID(userAuth) {
	const uuidHash = getUuidByString(userAuth.email, userAuth.name + userAuth.email + userAuth.locale);

	return uuidHash;
}
