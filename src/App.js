import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { StyledSidebar } from "./component/Sidebar";
import Recipe from "./pages/recipe/Recipe";

function App() {
	return (
		<Router>
			<div style={{ height: "100vh", display: "flex" }}>
				<StyledSidebar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/recipe" element={<Recipe />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
