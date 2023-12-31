import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import { generateFen } from './ChessLogic';
import useResizableBoard from '../utils/useResizableBoard.jsx';

function PlayMode() {
  const [fen, setFen] = useState(localStorage.getItem('fen') || generateFen());

  useEffect(() => {
    localStorage.setItem('fen', fen);
  }, [fen]);


  const chess = new Chess(fen);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // if not in setup mode, we make a move
    try {
      const move = chess.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', 
      });

      // If the move is illegal, chess.move will throw an error, and we'll catch it here
      if (move === null) return;
    } catch (error) {
      return;
    }

    setFen(chess.fen());
  };
   
  const boardWidth = useResizableBoard();
  return (
    <Chessboard
      position={fen}
      width={boardWidth}
      onDrop={onDrop}
      draggable={true}
    />
  );
}

export default PlayMode;
