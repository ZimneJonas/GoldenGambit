import Chessboard from 'chessboardjsx';
import React, { useState, useEffect  } from 'react';

function SetupWhite() {
  const [position, setPosition] = useState({
    a1: 'wR', b1: 'wN', c1: 'wB', d1: 'wQ', e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR',
    a2: 'wP', b2: 'wP', c2: 'wP', d2: 'wP', e2: 'wP', f2: 'wP', g2: 'wP', h2: 'wP'
  });

  useEffect(() => {
    localStorage.setItem('whitePosition', JSON.stringify(position));
  }, [position]); 
  
  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
    if (parseInt(targetSquare[1]) > 3) {
        return;  // Disallow moves to rows 4-8
    }
    
    const newPosition = { ...position };
    newPosition[targetSquare] = piece;
    if (sourceSquare !== 'spare') { delete newPosition[sourceSquare]; }

    // trigger a re-rende
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
  