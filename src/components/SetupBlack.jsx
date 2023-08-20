import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import useResizableBoard from '../utils/useResizableBoard.jsx';

function SetupBlack() {
  const [position, setPosition] = useState({
      a8: 'bR', b8: 'bN', c8: 'bB', d8: 'bQ', e8: 'bK', f8: 'bB', g8: 'bN', h8: 'bR',
      a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', e7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP'
  });

  useEffect(() => {
    localStorage.setItem('blackPosition', JSON.stringify(position));
  }, [position]); 
  

  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
      if (parseInt(targetSquare[1]) < 6) {
          return;  // Disallow moves to rows 1-5
      }

      const newPosition = { ...position };
      if (sourceSquare !== 'spare') { delete newPosition[sourceSquare]; }
      newPosition[targetSquare] = piece;
      
      setPosition(newPosition);
  };
  
  const boardWidth = useResizableBoard();
  return (
    <Chessboard
      position={position}
      width={boardWidth}
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