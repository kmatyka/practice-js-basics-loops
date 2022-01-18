const x = 5;
let iteration = 0;
let randomNumber = -1;

while (randomNumber != x) {
    randomNumber = Math.floor(Math.random() * 10)
    iteration++;
}

console.log(iteration)

