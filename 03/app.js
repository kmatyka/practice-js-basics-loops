const x = 5;
let iteration = 1;


let randomNumber = Math.round(Math.random() * 20);

while (x !== randomNumber) {
  randomNumber = Math.round(Math.random() * 20);
  iteration += 1;
}

console.log(`Liczba ${x} wylosowana za ${iteration} razem.`);