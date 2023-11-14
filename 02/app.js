const x = 5;
let result = 0;

function sum() {
  for(let i = 1; i <= x; i++) {
    console.log(`${i}. result = ${result} + ${i}`);
    result += i;
    
  }
}

sum();


const y = 5;
let resultTwo = 0;
let count = 1

while(count <= x) {
  console.log(`${count}. result = ${resultTwo} + ${count}`);
  resultTwo += count;
  count++;
}