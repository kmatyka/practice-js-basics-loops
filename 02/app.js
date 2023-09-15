const x = 5;
let result = 0;

// Let
console.log('____for____');

for (let i = 1; i <= x; i++) {
  result = result + i;
  console.log(result);
}

// While
console.log('____while____');

let resultWhile = 0;
let i = 1;
while (i <= x) {
  resultWhile = resultWhile + i;
  i++;
  console.log(resultWhile);
}
