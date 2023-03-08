import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { StyledSidebar } from './component/sidebar';

function App() {
  return (
    <Router>
      <div style={{ height: "100vh", display: "flex" }}>
        <StyledSidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;