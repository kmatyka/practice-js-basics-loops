const x = Math.round(Math.random() * 20);
let iteration = 0;
let randomNumber = -1;

const guessNumber = (x) => {
  while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * x);
    iteration++;
  }
  console.log(`Program zgadł wylosowaną liczbę po ${iteration} próbach`);
};
guessNumber(x);
