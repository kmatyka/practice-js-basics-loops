const x = 10;
let iteration = 0;
let randomNumber;

while (randomNumber !== x) {
    iteration += 1;
    randomNumber = Math.floor(Math.random() * 20);
    console.log(`randomNumber is ${randomNumber}`);
};

if (randomNumber === x) {
    console.log(`While loop trying ${iteration} times to match your ${x} num`);
};



