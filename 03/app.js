const x = 10;
let iteration = 0;
let randomNumber = Math.round(Math.random() * x);


while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * x);
    iteration = iteration + 1; 
   }
  console.log(iteration);
   