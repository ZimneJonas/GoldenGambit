import React, { useState } from 'react';
import ChessBoard from '../components/ChessBoard';

function Game() {
  const [fen, setFen] = useState('start');

  return <ChessBoard fen={fen} setFen={setFen} />;
}

export default Game;