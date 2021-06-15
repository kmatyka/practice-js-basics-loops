const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
  result += i;
}

console.log(`Koncowy wynik to ${result}`);

let whileResult = 0;
let i = 0;

while (i <= x) {
  whileResult += i;
  i++;
}

console.log(`Koncowy wynik to ${whileResult}`);
