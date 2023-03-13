const x = 10;
let iteration = 0;
let randomNumber;

while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 10);
    iteration++;
}
console.log(iteration)

