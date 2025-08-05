import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage />} />
    </Routes>
  );
}

export default App;
