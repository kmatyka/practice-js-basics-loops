const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
  // console.log(`${result} + ${i}`) 
  result = result + i;
  
}
console.log("pętla for");
console.log(result);

console.log("pętla while");

let result2 = 0;

let j = 0;
while (j <= x) {
  result2= result2 + j;
  j++;
  
}
console.log(result2);

