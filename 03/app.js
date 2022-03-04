const x = 10;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++;

    console.log(randomNumber, iteration);
}

console.log(iteration, 'Tyle iteracji potrzeba do wylosowania', x);