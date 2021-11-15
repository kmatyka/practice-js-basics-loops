const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
  randomNumber = Math.round(Math.random() * 10 + 1);
  //console.log(`Wylosowano: ${randomNumber}`);
  iteration++;
  //console.log(`Powtorzenie: ${iteration}`);
}

console.log(
  `Wylosowano x, czyli ${randomNumber}. Ilosc powtorzen to ${iteration}`
);
