const x = 10;
let iteration = 0;
let randomNumber;

while (x !== randomNumber) {
	randomNumber = Math.floor(Math.random() * x + 1);
	iteration++;
    console.log(randomNumber);
}
console.log('ilość prób wylosowania liczby: ',iteration);
