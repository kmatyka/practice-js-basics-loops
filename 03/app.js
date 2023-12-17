const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.floor(Math.random() * 21);
    iteration++;
}
console.log(`Aby uzyskać ${x}, liczba iteracji wynosi: ${iteration}`);
