const x = 4;
let iteration = 0;
let randomNumber = -1;

while(x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 20);
    iteration = iteration + 1; 
}
console.log(iteration);