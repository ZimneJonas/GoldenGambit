// SetupBoard.jsx
import { Link } from 'react-router-dom';
import SetupBlack from '../components/SetupBlack';
import SetupWhite from '../components/SetupWhite';
import './DisplayBoard.css';

function SetupBoard({ color }) {
  return (
    <div className="display-board">
      {color === 'black' ? <SetupBlack /> : <SetupWhite />}
      <Link to="/">Menu</Link>
    </div>
  );
}

export default SetupBoard;
