export function generateFen() {
  const whitePosition = JSON.parse(localStorage.getItem('whitePosition')) || {};
  const blackPosition = JSON.parse(localStorage.getItem('blackPosition')) || {};

  let fen = "";

  for (let rank = 8; rank >= 1; rank--) {
    let emptySquares = 0;

    for (let file of "abcdefgh") {
      const square = `${file}${rank}`;
      
      let piece = null;
      if (rank < 4) {
        piece = whitePosition[square];
        if (piece) piece = piece[1];
      } else if (rank >= 6) {
        piece = blackPosition[square];
        if (piece) piece = piece[1].toLowerCase();
      }
      
      if (piece) {
        if (emptySquares > 0) {
          fen += emptySquares;
          emptySquares = 0;
        }
        fen += piece;
      } else {
        emptySquares++;
      }
    }

    if (emptySquares > 0) {
      fen += emptySquares;
    }

    if (rank > 1) {
      fen += "/";
    }
  }

  fen += " w KQkq - 0 1";

  return fen;
}
