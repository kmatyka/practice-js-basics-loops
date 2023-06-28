const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x !== randomNumber) {
  iteration++;
  randomNumber = Math.round(Math.random() * 20);
}

console.log(iteration);
console.log(randomNumber);
