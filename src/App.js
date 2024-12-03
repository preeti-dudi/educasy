// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const isAuthenticated=true;

  return (
    <Router>
    <main className="app-content">
      <Routes>
        </Routes>
        </main>
    </Router>
  );
}

export default App;
