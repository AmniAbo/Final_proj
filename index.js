import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './Dark_Mode/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Router>
  </React.StrictMode>
);
