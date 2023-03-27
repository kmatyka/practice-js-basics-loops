const x = 10;
let iteration = 0;
let randomNumber = -1;



let i=1;
while(randomNumber !== x){
    randomNumber = Math.round(Math.random() * 20);
    iteration++;
    console.log(randomNumber, iteration);
}

console.log(iteration, "Tyle losowań wykonano, żeby wylosować", x)
