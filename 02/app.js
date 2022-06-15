const x = 5;
let result = 0;

// for loop
console.log('pętla FOR')

for (let i = 1; i <= x; i++) {
    result = result + i;
    console.log(result)
}

console.log('Wynik końcowy pętli for: ' + result)


// while loop
console.log('pętla WHILE')

let j = 0;
result = 0;

while (j < x) {
    j++;
    result = result + j;
    console.log(result)
}

console.log('Wynik końcowy pętli while: ' + result)