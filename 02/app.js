const x = 5;
let result = 0;

console.log('for');
for (let i = 1; i <= x; i++) {    
    console.log(`${result} = ${result} + ${i}`);
    result = result + i;
}
console.log('while');
result = 0;
let i = 0;
while (i < x) {
    result = result + i;
    i++;
    console.log(`${result} = ${result} + ${i}`);
}