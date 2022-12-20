const x = 5;
let result = 0;

// For loop
for (let i = 1; i <= x; i++) {
    result += i;
}
console.log('Result "for" loop: ' + result);

// While loop
result = 0;
let j = 1;
while (j <= x) {
    result += j;
    j++;
}
console.log('Result "while" loop: ' + result);