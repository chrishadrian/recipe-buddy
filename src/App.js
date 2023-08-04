import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { StyledSidebar } from "./component/Sidebar";
import Recipe from "./pages/recipe/Recipe";
import Landing from "./pages/Landing";

function App() {
	let isLogin = true;
	return (
		<Router>
			<div style={{ height: "100vh", display: "flex" }}>
				{isLogin ? (
					<>
						<StyledSidebar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/recipe" element={<Recipe />} />
							<Route
								path="*"
								element={<Navigate replace to="/" />}
							/>
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
