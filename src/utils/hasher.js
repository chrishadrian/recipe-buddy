import { SHA256 } from 'crypto-js';

export default function generateUserID(userAuth) {
	const secret = userAuth.name + userAuth.email + userAuth.locale;
	const hashedValue = SHA256(secret).toString();
	return hashedValue;
}
