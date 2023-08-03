import React from "react";
import { Box, SpeedDialIcon } from "@mui/material";

export default function Landing() {
	return (
		<Box className="flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800">
			<Box className="w-96 flex flex-col flex-auto justify-center items-center">
				<Box>
					<SpeedDialIcon />
				</Box>
				<Box>Welcome to RecipeBuddy</Box>
				<Box>Log in with your account to continue</Box>
			</Box>
		</Box>
	);
}
