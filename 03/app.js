const x = 5;
let iteration = 0;
let randomNumber = -1;

while (x !== randomNumber) {
  randomNumber = Math.round(Math.random() * 10);
  iteration++;
}

console.log(
  "W celu wylosowania liczby 5, losowanie odbyło się " + iteration + " razy"
);
