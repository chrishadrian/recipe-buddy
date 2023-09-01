import { generateRecipeID } from '../hasher';
import { createSubCollectionDocument } from './firestore';

const addNewRecipe = async (user, recipe) => {
	const { title, description, image, link } = recipe;

	const recipeDoc = {
		id: generateRecipeID(recipe),
		title,
		description,
		image,
		link,
	};

	const userDocRef = await createSubCollectionDocument(user, 'recipes', recipeDoc);

	return userDocRef;
};
export default addNewRecipe;
