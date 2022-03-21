const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * x);
    iteration++
}

console.log(`Wykonano ${iteration} iteracji aby wylosować liczbę ${x}`)