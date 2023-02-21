const x = 5;
let iteration = 0;
let randomNumber = 0;

while (randomNumber !== x) {
  iteration++;
  randomNumber = Math.round(Math.random() * 10);
}

console.log(`Liczba iteracji to: ${iteration}`);
