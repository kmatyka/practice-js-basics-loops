const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
  console.log(`${i}. result = ${result} + ${i}`);

  result += i;
}

console.log("Sum =", result);

console.log("-------------------");

let result2 = 0;
let counter = 1;

while (counter <= x) {
  console.log(`${counter}. result2 = ${result2} + ${counter}`);

  result2 += counter;
  counter++;
}

console.log("Sum =", result2);
