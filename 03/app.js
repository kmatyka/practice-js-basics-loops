const x = 3;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * x);
    iteration++;
    // console.log(randomNumber);
}
console.log(iteration);