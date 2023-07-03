const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
  result = result + i;
  console.log('for:', result);
}

let result1 = 0;
let j = 1;
while (j <= x) {
  result1 = result1 + j;
  j++;
  console.log('while:', result1);
}
