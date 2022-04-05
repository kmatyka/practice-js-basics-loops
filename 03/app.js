const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !==x) {
    randomNumber = Math.round(Math.random()*x);
    iteration++;
}
// randomNumber = Math.round(Math.random()*x);
// console.log(randomNumber);
console.log("Iteration count: ",iteration);
console.log("randomNumber: ", randomNumber);