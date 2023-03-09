import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import { recipes } from './constant';
import { Search } from '@mui/icons-material';
import { InstagramEmbed } from 'react-social-media-embed';

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
      <TextField
        label="Search"
        size="medium"
        onChange={handleSearchChange}
        sx={{
          borderRadius: 20,
          backgroundColor: 'white',
          width: '15%',
          height: '10%',
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
      <Box className="flex my-4">
        <Box className="w-1/3 flex">
          <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={"90%"} />
        </Box>
        <Box className="w-2/3 max-h-screen">
          <Grid container spacing={3} height={'40vh'}>
            {filteredRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id} height={'100%'}>
                <Card
                  sx={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '20px',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={recipe.image}
                    alt={recipe.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '70%',
                    }}
                  />
                  <CardContent sx={{height: 0}}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ color: `${palette.secondary.main}`, fontWeight: 'bold', mb: 1 }}>
                      {recipe.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ color: `${palette.primary.main}` }}
                    >
                      {recipe.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
            }
          </Grid >
        </Box>
      </Box>

    </div>
  );
};

export default RecipeList;

{/* <Card sx={{ bgcolor: palette.common.white }}>
            <CardMedia
              component="img"
              height="100px"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                sx={{ color: `${palette.secondary.main}` }}>
                {recipe.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: `${palette.primary.main}` }}
              >
                {recipe.description}
              </Typography>
            </CardContent>
          </Card> */}