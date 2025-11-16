import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import TopBar from './components/TopBar/TopBar';
import InfoPage from './pages/info/InfoPage';
import { FlashcardPage } from './pages/flashcard/FlashcardPage';

function App() {
  return (
      <div className="ml-40 mr-40">
          <TopBar/>
          <div className="pt-8">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/info" element={<InfoPage />} />
                  <Route path="/flashcards" element={<FlashcardPage />} /> 
              </Routes>
        </div>
      </div>
  );
}

export default App;