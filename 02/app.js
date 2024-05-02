const x = 5;
let result = 0;

for(let i = 1; i <= x; i++) {
    result += i;
}

console.log("Petla for dała wynik: " + result);

result = 0
let i = 1;

while(i <= x) {
    result += i++;
}

console.log("Petla while dała wynik: " + result);