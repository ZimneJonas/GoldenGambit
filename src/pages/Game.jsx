// Game.jsx
import PlayMode from '../components/PlayMode';
import { Link } from 'react-router-dom';
import './DisplayBoard.css';

function Game() {
  return (
    <div className="display-board">
      <PlayMode/>
      <Link to="/">Menu</Link>
    </div>
  );
}

export default Game;
