import { generateRecipeID } from '../hasher';
import { createSubCollectionDocument, getSubCollectionDocuments } from './firestore';

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

const getRecipes = async (user) => {
	const recipeDocs = await getSubCollectionDocuments(user, 'recipes');

	return recipeDocs;
};
export { addNewRecipe, getRecipes };
