const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
    result = result + i
}

console.log(result, 'for')


let result2 = 0
let j = 1
while (j <= x) {
    result2 = result2 + j
    j++
}

console.log(result2, 'while')