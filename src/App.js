import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import SetupBoard from './pages/SetupBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<SetupBoard />} />
      </Routes>
    </Router>
  );
}

export default App;