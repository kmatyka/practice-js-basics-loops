const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber != x) {
  randomNumber = Math.round(Math.random() * 20);
  iteration++;
}

console.log(`Liczbę ${x} udało się wylosować po ${iteration} próbach.`);
