import React from 'react';
import { Box, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/recipebuddy.png';

export default function Landing() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Box className='flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800'>
			<Box className='w-96 flex flex-col flex-auto justify-center items-center'>
				<Box className='mb-8'>
					<img src={logo} alt='Recipe Buddy Logo' className='w-32' />
				</Box>
				<Box className='mb-3 text-center'>Welcome to RecipeBuddy</Box>
				<Box className='mb-3'>Log in with your account to continue</Box>
				<Box className='flex space-x-4'>
					<Button variant='contained' onClick={() => loginWithRedirect()}>
						Login
					</Button>
					<Button
						variant='contained'
						onClick={() => {
							window.open(
								// eslint-disable-next-line max-len
								'https://dev-10xrgme543niaw5t.us.auth0.com/u/signup?state=hKFo2SBnVlRCYjJ5X09aMTVDb1BhNXRsY0ZobjRxWklwZ1pYZKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDl0SjdOd3hoWEY1cUxWMGpCYnZEV2ctbHNKUEY0dVJ0o2NpZNkgMmVPaGlBeWtGcWtDd09SU2JEZ29iVjBSa3MzRmZSMzU',
								'_blank',
								'noreferrer',
							);
						}}
					>
						Signup
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
