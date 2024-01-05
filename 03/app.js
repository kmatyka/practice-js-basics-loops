const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
  randomNumber = Math.round(Math.random() * 20);
  iteration++;
  console.log(
    "Iteracja nr " + iteration + " Wylosowana liczba to " + randomNumber
  );
}
console.log(
  "Pętla musiała zostać wykonana " +
    iteration +
    " razy, żeby znaleźć liczbę przechowywaną w zmiennej x, czyli " +
    x
);
