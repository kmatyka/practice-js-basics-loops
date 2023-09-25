const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
  randomNumber = Math.round(Math.random() * x);

  console.log(`Obecnie wylosowana liczba to: ${randomNumber}`);

  iteration++;
}

console.log(`Ilość prób do skutecznego wylowania liczby "${x}": ${iteration}`);
