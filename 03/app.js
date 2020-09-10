const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber != x) {
    randomNumber = Math.round(Math.random() * x);
    iteration++;
}

console.log('Aby wylosować liczbę ' + x + ' pętla została wykonana ' + iteration + ' razy');