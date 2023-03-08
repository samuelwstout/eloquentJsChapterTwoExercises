let result = "";
let size = 40;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    // for the first row:
    // 0 - 0 = ' '
    // 0 - 1 = '#'
    // 0 - 2 = ' '
    // 0 - 3 = '#'
    // 0 - 4 = ' '
    // 0 - 5 = '#'
    // 0 - 6 = ' '
    // 0 - 7 = '#'
    // for the second row:
    // 1 - 0 = '#'
    // 1 - 1 = ' '
    // 1 - 2 = '#'
    // 1 - 3 = ' '
    // 1 - 4 = '#'
    // 1 - 5 = ' '
    // 1 - 6 = '#'
    // 1 - 7 = ' '
    // and so on...
    if ((i + j) % 2 == 0) {
      result += ' ';
    } else {
      result += '#';
    }
  }
  result += '\n';
}
console.log(result);