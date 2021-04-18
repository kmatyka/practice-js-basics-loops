const x = 10;
let iteration = 0;
let randomNumber = -1;

console.log('Sprawdźmy, za którym razem, losując liczby z przedziału 0 - 30, uda się wylosować liczbę 10')

while (randomNumber !== x) {
    iteration++;
    randomNumber = Math.floor(Math.random() * 31);
    console.log('Za ' + iteration + ' razem wylosowano ' + randomNumber)
}

console.log('Liczba losowań = ' + iteration)