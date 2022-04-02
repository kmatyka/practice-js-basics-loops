const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !==x) {
    randomNumber = Math.round(Math.random() *20);
    console.log(randomNumber); //dla mojej informacji, można usunąć
    iteration++;
}
console.log('Liczba została wylosowana za ' +iteration +' razem.');