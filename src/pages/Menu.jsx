// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const handleLinkClick = () => {
        localStorage.removeItem('fen');
      }
  return (
    <div className="menu">
      <Link to="/game">Continue</Link>
      <Link to="/setupWhite">Setup White</Link>
      <Link to="/setupBlack">Setup Black</Link>
      <Link onClick={handleLinkClick} to="/game">New Game</Link>
    </div>
  );
}

export default Menu;
