const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * x);
    iteration++;
}

console.log(`Liczba x = ${x} została wylosowana za ${iteration} razem :)`);