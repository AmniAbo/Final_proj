import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Path is correct since index.css is in the same folder
import App from './App'; // Path is correct since App.js is in the same folder
import Home from './Home'; // Import your Home component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here as needed */}
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
