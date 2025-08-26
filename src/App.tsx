import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar/>
      <div className = "pt-8">
        <Routes>
          <Route path = "/" element = {<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;