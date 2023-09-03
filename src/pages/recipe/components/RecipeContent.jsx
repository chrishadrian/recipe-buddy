import React, { useState } from 'react';
import './RecipeContent.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export default function RecipeContent(props) {
	const { filteredRecipes, palette } = props;
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	return (
		<Box className='flex my-4 h-4/5'>
			<Box className='w-1/3 flex'>
				{selectedRecipe && (
					<InstagramEmbed
						url={selectedRecipe.link}
						width='85%'
						style={{ overflow: 'auto', direction: 'rtl' }}
						key={selectedRecipe.link}
					/>
				)}
			</Box>
			<Box className='w-2/3'>
				<Grid container spacing={3} height='40vh'>
					{filteredRecipes.map((recipe) => (
						<Grid item xs={12} sm={6} md={4} key={recipe.id} height='100%'>
							<Card
								sx={{
									width: '100%',
									height: '100%',
									boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
									borderRadius: '20px',
									'&:hover': {
										transform: 'translateY(-5px)',
										boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
										cursor: 'pointer',
									},
								}}
								onClick={() => {
									setSelectedRecipe(recipe);
								}}
							>
								<CardMedia
									component='img'
									image={recipe.image}
									alt={recipe.title}
									sx={{
										objectFit: 'cover',
										width: '100%',
										height: '70%',
									}}
								/>
								<CardContent sx={{ height: 0 }}>
									<Typography
										variant='h6'
										component='h2'
										sx={{
											color: `${palette.secondary.main}`,
											fontWeight: 'bold',
											mb: 1,
										}}
									>
										{recipe.title}
									</Typography>
									<Typography variant='body2' component='p' sx={{ color: `${palette.primary.main}` }}>
										{recipe.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
