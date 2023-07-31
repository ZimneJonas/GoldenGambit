// App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import SetupBoard from './pages/SetupBoard';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/setupBlack" element={<SetupBoard color='black'/>} />
        <Route path="/setupWhite" element={<SetupBoard color='white'/>} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;