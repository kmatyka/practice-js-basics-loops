const x = 5;
let result = 0;
let i = 1;

//petla for
for(i = 1; i <= x; i++) {
    result += i;
}
console.log('Wynik z wykorzystaniem pętli for: ' + result);

//petla while
result = 0;
i = 1;
while(i <= x) {
    result += i;
    i++;
}
console.log('Wynik z wykorzystaniem pętli while: ' + result);