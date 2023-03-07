let grid = '';
for (let i = 0; i < 64; i++) {
  if (i > 0) {
    if (i % 8 == 0) grid = grid + '\n';
  }
  grid += 's';
}
console.log(grid);