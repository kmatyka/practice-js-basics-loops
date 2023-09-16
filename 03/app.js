const x = 10;
let iteration = 0;
let randomNumber;

while (randomNumber !== x) {
  randomNumber = Math.round(Math.random() * 10 + 1);
  iteration++;
}

console.log(`Wartość ${x}, wylosowano po ${iteration} próbach`);
