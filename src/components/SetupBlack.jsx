import { fenToPositionObj } from './ChessLogic';
import Chessboard from 'chessboardjsx';
import React, { useState } from 'react';

function SetupBlack() {
    const [position, setPosition] = useState(fenToPositionObj('rnbqkbnr/pppppppp/8/8/8/8/8/8 w KQkq - 0 1'));
  
    const onDrop = ({ sourceSquare, targetSquare }) => {
      if (parseInt(targetSquare[1]) < 6) {
        return;  // Disallow moves to rows 1-5
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
            ...Array.from({ length: 5 }, (_, i) => i).flatMap(i =>
              'abcdefgh'.split('').map(file => `${file}${i+1}`)
            ).reduce((acc, square) => ({ ...acc, [square]: { backgroundColor: 'rgba(0, 0, 0, 0.4)' } }), {})
          }}
        onDrop={onDrop}
        draggable={true}
        orientation="black"
      />
    );
  }
  
  export default SetupBlack;