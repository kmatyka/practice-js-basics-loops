const x = Math.round(Math.random() * 10);
let iteration = 0;
let randomNumber = -1;

console.log('Poszukwiana liczba: '+ x)
while(randomNumber!=x) {
    iteration++;
    randomNumber = Math.round(Math.random() * 10);
    console.log('Wylosowana liczba: '+ randomNumber);
    console.log('Iteracja: '+ iteration);
}
console.log('Koniec poszukiwań!');