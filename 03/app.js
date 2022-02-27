const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 30)
    iteration++;
}
console.log('Liczba losowań: ' + iteration);