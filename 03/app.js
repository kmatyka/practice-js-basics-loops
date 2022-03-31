const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 15);
    iteration = iteration + 1;
}

console.log('Liczby zrównały się w ' + iteration + ' próbie');
console.log('wylosowana liczba: ' + randomNumber);
console.log('szukana liczba: ' + x);