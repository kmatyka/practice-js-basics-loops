const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
  result = result + i;
  console.log(result);
}
console.log("Suma wynosi " + result);

let result2 = 0;
let j = 0;
while (j <= x) {
  result2 = result2 + j;
  j++;
  console.log(result2);
}
console.log("Suma wynosi " + result2);
