import React from 'react';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

function ChessBoard({ fen, setFen }) {
  const chess = new Chess();

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', 
    });

    // illegal move
    if (move === null) return;

    setFen(chess.fen());
  };

  return (
    <Chessboard
      position={fen}
      onDrop={onDrop}
    />
  );
}

export default ChessBoard;

