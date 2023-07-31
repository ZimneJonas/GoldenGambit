


export function fenToPositionObj(fen) {
    // Define a mapping from FEN characters to piece names that can be recognized by chessboardjsx
    const piecesMap = {
      r: 'bR',
      n: 'bN',
      b: 'bB',
      q: 'bQ',
      k: 'bK',
      p: 'bP',
      R: 'wR',
      N: 'wN',
      B: 'wB',
      Q: 'wQ',
      K: 'wK',
      P: 'wP',
    };
  
    // Extract the piece placement part from the FEN string
    const [pieces] = fen.split(' ');
  
    // Initialize the row and column indices for iterating over the squares of the board
    let row = 8;
    let col = 0;
  
    // Iterate over each rank in the piece placement part
    return pieces.split('/').reduce((acc, cur) => {
      [...cur].forEach((char) => {
        // If the character is a piece (not a number)
        if (isNaN(parseInt(char, 10))) {
          // Add the piece to the position object with the square (file + rank) as the key
          acc[String.fromCharCode(97 + col) + row] = piecesMap[char];
          // Increment the column index
          col += 1;
        } else {
          // If the character is a number, increment the column index by that number
          col += parseInt(char, 10);
        }
      });
  
      // Decrement the row index and reset the column index after processing each rank
      row -= 1;
      col = 0;
  
      // Return the updated position object
      return acc;
    }, {});
  }
