const x = 10;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 15);
    iteration++;
    console.log(randomNumber);
}

console.log('Losowanie odbyło się '+ iteration +' razy, zanim wylosowano liczbę 10 ');