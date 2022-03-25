const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++
    console.log('iteretion: ' + iteration + ', random is: ' + randomNumber)
    if(randomNumber === x) console.log('Aff, finally')
}
console.log('number of iteration is: ', iteration)















