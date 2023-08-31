import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './pages/dashboard/Dashboard';
import StyledSidebar from './component/Sidebar';
import Recipe from './pages/recipe/Recipe';
import Landing from './pages/Landing';
import addNewUser from './utils/firebase/user';

function App() {
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		if (user) addNewUser(user);
	}, [user]);
	return (
		<Router>
			<div style={{ height: '100vh', display: 'flex' }}>
				{isAuthenticated ? (
					<>
						<StyledSidebar />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/recipe' element={<Recipe />} />
							<Route path='*' element={<Navigate replace to='/' />} />
						</Routes>
					</>
				) : (
					<Landing />
				)}
			</div>
		</Router>
	);
}

export default App;
