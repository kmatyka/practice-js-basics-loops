const x = 10;
let iteration = 0;
// let randomNumber = -1;

while (x !== Math.round(Math.random() * x)) {
	iteration++;
}
console.log(iteration);
