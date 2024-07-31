import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';
import RecipeContent from './components/RecipeContent';
import SearchBar from './components/SearchBar';
import RecipeDialog from './components/RecipeDialog';
import { getRecipes } from '../../utils/firebase/recipe';

function RecipeList() {
	const { palette } = useTheme();
	const { user } = useAuth0();
	const [recipes, setRecipes] = useState(null);
	const [filteredRecipes, setFilteredRecipes] = useState(recipes);
	const [open, setOpen] = useState(false);
	const [isNewRecipe, setIsNewRecipe] = useState(false);

	useEffect(() => {
		const firebaseRecipes = getRecipes(user);

		firebaseRecipes.then((result) => {
			setRecipes(result);
			setFilteredRecipes(result);
		});
	}, [user, isNewRecipe]);

	return (
		<div className='flex flex-col m-5 mx-14 w-full'>
			<Typography variant='h4' sx={{ mb: 2 }}>
				Your recipes
			</Typography>
			<Box className='flex justify-between'>
				<SearchBar recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
				<Button
					variant='contained'
					startIcon={<Add />}
					onClick={() => {
						setOpen(true);
					}}
					sx={{ borderRadius: '20px', width: '10rem', mr: 2 }}
				>
					Add Recipe
				</Button>
			</Box>
			{filteredRecipes && <RecipeContent filteredRecipes={filteredRecipes} palette={palette} />}
			<RecipeDialog user={user} open={open} setOpen={setOpen} setIsNewRecipe={setIsNewRecipe} />
		</div>
	);
}

export default RecipeList;
