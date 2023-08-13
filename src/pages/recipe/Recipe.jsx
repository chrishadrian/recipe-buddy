import React, { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';
import RecipeContent from './components/RecipeContent';
import SearchBar from './components/SearchBar';
import RecipeDialog from './components/RecipeDialog';
import { recipes } from './constants';

function RecipeList() {
	const { palette } = useTheme();
	const [filteredRecipes, setFilteredRecipes] = useState(recipes);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
					onClick={handleOpen}
					sx={{ borderRadius: '20px', width: '10rem', mr: 2 }}
				>
					Add Recipe
				</Button>
			</Box>
			<RecipeContent filteredRecipes={filteredRecipes} palette={palette} />
			<RecipeDialog open={open} handleClose={handleClose} />
		</div>
	);
}

export default RecipeList;
