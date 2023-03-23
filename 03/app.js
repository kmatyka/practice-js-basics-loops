const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    iteration++;
    randomNumber = Math.floor(Math.random() * x + 1);
    console.log(randomNumber);
}

console.log(`Udało się za ${iteration} razem wylosować ${x}`);