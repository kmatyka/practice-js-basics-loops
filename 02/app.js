// for 
const x = 5;
let result = 0;

for(let i=0; i<=x; i++) {
    result += i; 
    console.log(result);
}
console.log("Sumba liczb od 1 do", x, "wynosi:", result);


// while
let resultWhileLoop = 0;
let i = 0;

while(i<=x) {
    resultWhileLoop += i;
    i++;
    console.log(resultWhileLoop);
}
console.log("Sumba liczb od 1 do", x, "wynosi:", resultWhileLoop);