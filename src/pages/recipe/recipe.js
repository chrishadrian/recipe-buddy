import React, { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material'
import { recipes } from './constant';
import { Add } from '@mui/icons-material';
import RecipeContent from './components/RecipeContent';
import { SearchBar } from './components/SearchBar';

const RecipeList = () => {
  const { palette } = useTheme();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)

  return (
    <div className='flex flex-col m-5 mx-14 w-full'>
      <Typography variant="h4" sx={{ mb: 2 }} >
        Your recipes
      </Typography>
      <Box className="flex justify-between">
        <SearchBar recipes={recipes} setFilteredRecipes={setFilteredRecipes}/>
        <Button variant='contained' startIcon={<Add />} sx={{ borderRadius: '20px', width: "10rem", mr:2}}>Add Item</Button>
      </Box>
      <RecipeContent filteredRecipes={filteredRecipes} palette={palette} />

    </div>
  );
};

export default RecipeList;

