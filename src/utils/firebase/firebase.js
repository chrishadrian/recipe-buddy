import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// https://firebase.google.com/docs/web/setup#available-libraries

const production = process.env.NODE_ENV === 'prod';

const firebaseProdConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'recipebuddy-prod.firebaseapp.com',
	projectId: 'recipebuddy-prod',
	storageBucket: 'recipebuddy-prod.appspot.com',
	messagingSenderId: '183607586953',
	appId: '1:183607586953:web:f1fe0ee63efe55b6239658',
	measurementId: 'G-T2WHGEXCPV',
};

const firebaseDevConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'recipebuddy-1261c.firebaseapp.com',
	projectId: 'recipebuddy-1261c',
	storageBucket: 'recipebuddy-1261c.appspot.com',
	messagingSenderId: '794295590368',
	appId: '1:794295590368:web:b34b05e9fc8ef22a73df85',
	measurementId: 'G-4VYXX6XK1J',
};

// Initialize Firebase
const app = initializeApp(production ? firebaseProdConfig : firebaseDevConfig);
getAnalytics(app);

export default app;
