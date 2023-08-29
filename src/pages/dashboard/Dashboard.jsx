import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RecipeTable from './components/RecipeTable';
import ShoppingList from './components/ShoppingList';
import SignIn from '../../component/SignIn';

export default function Dashboard() {
	const { user } = useAuth0();
	const [username, setUsername] = useState('');

	useEffect(() => {
		console.log('User: ', user);
		if (user) {
			const tempUsername = user.name.split(' ');
			setUsername(tempUsername[0].charAt(0).toUpperCase() + tempUsername[0].slice(1));
		}
	}, [user]);
	return (
		<Box className='p-8 w-[65%]'>
			<Typography variant='h2' color='primary' sx={{ mb: 3 }}>
				{`Welcome, ${username}`}
			</Typography>
			<Box className='flex w-full justify-between'>
				<Box className=''>
					<RecipeTable />
				</Box>
				<Box className='w-1/4 max-h-[439px]'>
					<ShoppingList />
				</Box>
			</Box>
			<Box>
				<SignIn />
			</Box>
		</Box>
	);
}
