const x = 5;
let result = 0;

for(let i = 0; i <= x; i++) {
     result = result + i
    console.log(result)
}

console.log(result)

///here the same code but using while loop
let i = 0
while(i <= x) {
    result = result + i
    console.log(result)
    i++
}
console.log(`The final result is ${result}`)