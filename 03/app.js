const x = 10;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x){
   randomNumber = Math.round(Math.random() * 1000)
    iteration = iteration + 1;
}

console.log('Loop run ' + iteration + ' times until got correct number!');