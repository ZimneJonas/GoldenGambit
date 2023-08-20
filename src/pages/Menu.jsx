// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const handleNewGame = () => {
        localStorage.removeItem('fen');
      }
  return (
    <div className="menu">
      <Link to="/setupWhite">Setup White</Link>
      <Link to="/setupBlack">Setup Black</Link>
      <Link onClick={handleNewGame} to="/game">Play</Link>
    </div>
  );
}

export default Menu;
