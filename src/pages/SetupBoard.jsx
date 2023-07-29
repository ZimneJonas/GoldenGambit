import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChessBoard from '../components/ChessBoard';

function SetupBoard() {
    const [fen, setFen] = useState('8/8/8/8/4K3/8/8/4k3 w - - 0 1');

  return (
    <div>
      <ChessBoard fen={fen} setFen={setFen} canSetup={true} />
      <Link to={`/game?fen=${fen}`}>Start Game</Link>
    </div>
  );
}

export default SetupBoard;
