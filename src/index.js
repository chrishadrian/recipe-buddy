import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProSidebarProvider } from "react-pro-sidebar";
import { ThemeProvider } from '@mui/material';
import theme from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

