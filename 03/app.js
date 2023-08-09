const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 30);
    console.log(randomNumber);
    iteration++;
}

console.log('udało Ci się wylosować liczbę 10 za ' + iteration + ' razem');