import React from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

function ChessBoard({ fen, setFen, canSetup = false }) {
  const chess = new Chess(fen);

  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
    // if setup mode is enabled, we simply place the pieces on the board
    if (canSetup) {
      // remove the piece from the source square
      chess.remove(sourceSquare);

      // and put it on the target square
      const pieceType = piece.replace(/w|b/, '');
      const color = piece.includes('w') ? 'w' : 'b';
      chess.put({ type: pieceType, color }, targetSquare);

      setFen(chess.fen());
    } else {
      // if not in setup mode, we make a move
      let move = chess.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', 
      });

      // illegal move
      if (move === null) return;

      setFen(chess.fen());
    }
  };

  return (
    <Chessboard
      position={fen}
      onDrop={onDrop}
      draggable={true}
    />
  );
}

export default ChessBoard;
