import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import { recipes } from './constant';
import { Add, Search } from '@mui/icons-material';
import { useProSidebar } from 'react-pro-sidebar';
import RecipeContent from './components/RecipeContent';

const RecipeList = () => {
  const { palette } = useTheme();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)

  const handleSearchChange = (e) => {
    const searchText = e.target.value
    setFilteredRecipes(recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchText.toLowerCase())
    ))
  }

  return (
    <div className='flex flex-col m-5 mx-14 w-full'>
      <Typography variant="h4" sx={{ mb: 2 }} >
        Your recipes
      </Typography>
      <Box className="flex justify-between">
        <TextField
          label="Search"
          size="small"
          onChange={handleSearchChange}
          sx={{
            borderRadius: 20,
            width: '15rem',
            color: 'gray',
            fontWeight: '500',
            '& .MuiInputBase-root': {
              borderRadius: 20,
              pl: 1
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant='contained' startIcon={<Add />} sx={{ borderRadius: '20px', width: "10rem", mr:2}}>Add Item</Button>
      </Box>
      <RecipeContent filteredRecipes={filteredRecipes} palette={palette} />

    </div>
  );
};

export default RecipeList;

