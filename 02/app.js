const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
    result += i;
}

console.log(`Wynik: ${result} (pętla for)`);

let resultWhile = 0;
let counter = 0;

while(counter <= x) {
    resultWhile += counter;
    counter++;
}

console.log(`Wynik: ${resultWhile} (pętla while)`);