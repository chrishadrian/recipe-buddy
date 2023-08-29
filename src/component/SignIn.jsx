import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function SignIn() {
	const { loginWithRedirect, logout } = useAuth0();

	return (
		<div className='flex justify-between w-1/5'>
			<h1>Sign In Page</h1>
			<button type='button' onClick={() => loginWithRedirect()}>
				Login
			</button>
			<button type='button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
				Logout
			</button>
		</div>
	);
}

export default SignIn;
