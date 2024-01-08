const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
  console.log("result = " + result + "+" + i);
  result = result + i;
}

console.log("Ostateczna suma to: " + result);

console.log("Za pomocą pętli while:");

result = 0;
let i = 1;

while (i <= x) {
  console.log("result = " + result + "+" + i);
  result = result + i;
  i++;
}

console.log("Ostateczna suma to: " + result);