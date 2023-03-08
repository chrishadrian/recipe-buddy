import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import { recipes } from './constant';

const RecipeList = () => {
  const { palette } = useTheme();

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card sx={{ bgcolor: palette.common.white }}>
            <CardMedia
              component="img"
              height="200"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ color: `${palette.secondary.main}` }}>
                {recipe.title}
              </Typography>
              <Typography variant="body2" component="p" sx={{ color: `${palette.primary.main}` }}>
                {recipe.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;