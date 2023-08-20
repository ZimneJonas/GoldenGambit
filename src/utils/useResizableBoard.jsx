// useBoardSize.js
import { useState, useEffect } from 'react';

function useBoardSize(initialScale = 0.8) {
  const [boardSize, setBoardSize] = useState(window.innerHeight * initialScale);

  useEffect(() => {
    const handleResize = () => {
      setBoardSize(window.innerHeight * initialScale);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialScale]);

  return boardSize;
}

export default useBoardSize;
