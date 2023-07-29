import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChessBoard from '../components/ChessBoard';

function Game() {
  const [fen, setFen] = useState('start');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fenParam = params.get('fen');
    if (fenParam) {
      setFen(fenParam);
    }
  }, [location]);

  return <ChessBoard fen={fen} setFen={setFen} />;
}

export default Game;
