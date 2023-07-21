const x = 5;
let iteration = 0;
let randomNumber = 0;



while (x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 10);
    iteration++
}

console.log(`after checking ${iteration} times, We found equal number to x`);