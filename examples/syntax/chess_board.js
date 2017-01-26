function drawBoard (rows = 0, cols = 0) {

  let draw = '';

  for(let i = 1; i <= rows; i++){
    for(let j = 0; j < cols; j++){
      if (draw[draw.length - 1] === '#') {
        draw += ' ';
        continue;
      }
      draw += '#';
    }
    if ((i % 2) !== 0) {
      draw += '\n ';
      continue;
    }
    draw +='\n';
  }
  return draw;
}

const chessBoardString = drawBoard(8, 8);
console.log(chessBoardString);
