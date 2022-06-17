
let iteration = 0;
let randomNumber = 0;

const x = 5;

while(randomNumber !==x) {

  randomNumber = Math.round(Math.random() *20);
  console.log(randomNumber)
  iteration ++
   
}
console.log(iteration)