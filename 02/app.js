const x = 5;
// let result = 0;

// FOR LOOP

const addNumbers = (x) => {
  let result = 0;
  for (let i = 0; i <= x; i++) {
    result += i;
  }
  console.log(result);
};
addNumbers(x);

// WHILE LOOP

const addNumbersWhileLoop = (x) => {
  let result = 0;
  let i = 0;
  while (i < x) {
    i++;
    result += i;
  }
  console.log(result);
};
addNumbersWhileLoop(x);
