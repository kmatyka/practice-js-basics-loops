const x = 5;
let iteration = 0;
let randomNumber = -1;

while (randomNumber!= x) {
    randomNumber= Math.round(Math.random() * 20);
    console.log(randomNumber);
    iteration++;
}

console.log('Pętla while zgadła za ' + iteration + ' razem');