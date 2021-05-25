const x = 10;
let iteration = 0;
let randomNumber = -1;
 


while(randomNumber !== x) {
  randomNumber = Math.floor(Math.random() * 12);
    console.log(randomNumber);
  iteration++;
}

console.log('Liczba losowań: ' + iteration)