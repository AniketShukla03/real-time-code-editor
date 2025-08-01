// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home'; // 👈 Importing Home page
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Optional: styling

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:roomId" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

