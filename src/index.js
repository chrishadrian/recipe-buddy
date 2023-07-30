import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Auth0Provider
				domain="dev-10xrgme543niaw5t.us.auth0.com"
				clientId="2eOhiAykFqkCwORSbDgobV0Rks3FfR35"
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
			>
				<ProSidebarProvider>
					<App />
				</ProSidebarProvider>
			</Auth0Provider>
		</ThemeProvider>
	</React.StrictMode>
);
