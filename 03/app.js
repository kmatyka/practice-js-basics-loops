const x = 10;
let iteration = 0;
let randomNumber = -1;

while(x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 20);
    console.log(randomNumber);
    iteration++;
}

console.log(`Liczbę ${x} udało się wylosować w ${iteration} iteracji`);