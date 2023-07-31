// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <Link to="/setupWhite">Setup White</Link>
      <Link to="/setupBlack">Setup Black</Link>
      <Link to="/game">Play Game</Link>
    </div>
  );
}

export default Menu;
