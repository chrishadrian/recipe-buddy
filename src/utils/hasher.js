import { SHA256 } from 'crypto-js';

export function generateUserID(userAuth) {
	const secret = userAuth.name + userAuth.email + userAuth.locale;
	const hashedValue = SHA256(secret).toString();
	return hashedValue;
}

export function generateRecipeID(recipe) {
	const secret = recipe.title + recipe.description;
	const hashedValue = SHA256(secret).toString();
	return hashedValue;
}
