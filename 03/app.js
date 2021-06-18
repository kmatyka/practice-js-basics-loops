const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber<10) {
    randomNumber = Math.round(Math.random()*10);
    console.log(randomNumber);
    iteration++;
}
console.log('petla wykonala sie' + iteration);