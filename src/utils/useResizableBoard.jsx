// useBoardSize.js
import { useState, useEffect } from 'react';

function useBoardSize(initialScale = 0.8) {
  const [boardSize, setBoardSize] = useState(Math.min(window.innerWidth, window.innerHeight) * initialScale);

  useEffect(() => {
    const calculateBoardSize = () => {
      const smallestDimension = Math.min(window.innerWidth, window.innerHeight);
      return smallestDimension * initialScale;
    };

    const handleResize = () => {
      setBoardSize(calculateBoardSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialScale]);

  return boardSize;
}

export default useBoardSize;
