import { fenToPositionObj } from './ChessLogic';
import Chessboard from 'chessboardjsx';
import React, { useState } from 'react';

function SetupWhite() {
    const [position, setPosition] = useState(fenToPositionObj('8/8/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
  
    const onDrop = ({ sourceSquare, targetSquare }) => {
      if (parseInt(targetSquare[1]) > 3) {
        return;  // Disallow moves to rows 4-8
      }
  
      const newPosition = { ...position };
      newPosition[targetSquare] = newPosition[sourceSquare];
  
      delete newPosition[sourceSquare];
  
      setPosition(newPosition);
    };
  
    return (
      <Chessboard
        position={position}
        sparePieces={true}
        squareStyles={{
            ...Array.from({ length: 5 }, (_, i) => i + 4).flatMap(i =>
              'abcdefgh'.split('').map(file => `${file}${i}`)
            ).reduce((acc, square) => ({ ...acc, [square]: { backgroundColor: 'rgba(0, 0, 0, 0.4)' } }), {})
          }}
        onDrop={onDrop}
        draggable={true}
      />
    );
  }
  
  export default SetupWhite;
  