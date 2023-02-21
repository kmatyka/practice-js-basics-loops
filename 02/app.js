const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
  result = result + i;
}

console.log(result);

let resultWhile = 0;
let counter = 0;

while (counter < x) {
  counter++;
  resultWhile = resultWhile + counter;
}

console.log(resultWhile);
