const x = 5;
let result = 0;

for (i = result + 1; i <= 5; i++) {
    result = result + i
    console.log(result);
}
console.log('Ostateczny wynik pętli for: ' + result)


let secondResult = 0;
let y = 0;

while (secondResult < x * 3) {
    y = y + 1
    secondResult = secondResult + y;
    console.log(secondResult);
}

console.log('Ostateczny wynik pętli while ' + secondResult);