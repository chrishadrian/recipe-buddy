import { createUserDocumentFromAuth, signInWithGooglePopUp } from '../utils/firebase';

function SignIn() {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopUp();
		await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<h1>Sign In Page</h1>
			<button type='button' onClick={logGoogleUser}>
				Sign in with Google Popup
			</button>
		</div>
	);
}

export default SignIn;
