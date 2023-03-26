const x =5;
let iteration = 0;
let randomNumber = -1;

// console.log(x);

while(randomNumber!==x){
   randomNumber = Math.floor(Math.random()*10);
   iteration=iteration+1;
   console.log(iteration);
}