const x = 5;
let result = 0;

for(let i=0; i<=x; i++) {
    result = i + result;
}

console.log(result);

let result2 = 0;
let i = 0;

while (i <= x) {
    result2 = i + result2;
    i++;
}

console.log(result2);