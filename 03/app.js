const x = 10;
let iteration = 0;
let randomNumber = -1;




while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 10);
    iteration = iteration + 1;
}

console.log(iteration);