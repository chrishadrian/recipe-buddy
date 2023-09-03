import React, { useState } from 'react';
import './RecipeContent.css';
import { InstagramEmbed } from 'react-social-media-embed';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	IconButton, // Import IconButton
	Menu, // Import Menu
	MenuItem, // Import MenuItem
	Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Import the triple dots icon

export default function RecipeContent(props) {
	const { filteredRecipes, palette } = props;
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	// State for the anchor element of the menu
	const [anchorEl, setAnchorEl] = useState(null);

	// Function to open the menu
	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	// Function to close the menu
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	// Function to handle the "Update Card" action (you can implement this as needed)
	const handleUpdateCard = (recipe) => {
		console.log(recipe);
		// Add your update card logic here
		// For example, you can navigate to an update page or show a modal for editing
		// This function will be called when the "Update Card" option is clicked
	};

	// Function to handle the "Delete Card" action (you can implement this as needed)
	const handleDeleteCard = (recipe) => {
		console.log(recipe);
		// Add your delete card logic here
		// For example, you can show a confirmation dialog and delete the card if confirmed
		// This function will be called when the "Delete Card" option is clicked
	};

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
									<Box className='flex justify-between items-center'>
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
										<IconButton aria-label='options' onClick={handleMenuOpen}>
											<MoreHorizIcon />
										</IconButton>
										<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
											<MenuItem onClick={() => handleUpdateCard(recipe)}>Update Card</MenuItem>
											<MenuItem onClick={() => handleDeleteCard(recipe)}>Delete Card</MenuItem>
										</Menu>
									</Box>
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
