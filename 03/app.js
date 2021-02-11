const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
    iteration++;
    randomNumber = Math.floor(Math.random() * 20+1);
}

console.log(iteration);


