const x = 10;
let iteration = 0;
let randomNumber = -1;

z = Math.round(Math.random() * 20);

while (z !== x) {
  iteration = iteration + 1;
  z = Math.round(Math.random() * 20);
  console.log(z);
  
}

console.log(`pętla zadziałała ${iteration} razy`);

