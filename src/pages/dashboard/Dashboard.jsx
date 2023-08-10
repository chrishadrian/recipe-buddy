import { Box, Typography } from "@mui/material";
import RecipeTable from "./components/RecipeTable";
import ShoppingList from "./components/ShoppingList";
import React from "react";
import SignIn from "../../component/SignIn";

export const Dashboard = () => {
	return (
		<Box className="p-8 w-[65%]">
			<Typography variant="h2" color="primary" sx={{ mb: 3 }}>
				Welcome, Christopher
			</Typography>
			<Box className="flex w-full justify-between">
				<Box className="">
					<RecipeTable />
				</Box>
				<Box className="w-1/4 max-h-[439px]">
					<ShoppingList />
				</Box>
			</Box>
			<Box>
				<SignIn />
			</Box>
		</Box>
	);
};