const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration = 1;
    iteration += iteration;
    console.log(randomNumber)
    
    if(randomNumber === x) {
        console.log('Trafiłaś za ' + iteration + ' razem.')
    }
}