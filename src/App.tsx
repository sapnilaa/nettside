import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import TopBar from './components/TopBar/TopBar';
import wallpaper from './assets/images/one_piece_wallpaper.jpg'

function App() {
  return (
    <div>
      <TopBar/>
      <div className = "pt-8">
        <img className = "w-screen h-screen" src={wallpaper} alt = "wallpaper" />
        <Routes>
          <Route path = "/" element = {<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;