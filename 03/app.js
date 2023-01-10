const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x !== Math.round(Math.random() * 100)) {
	iteration = iteration + 1;
}

console.log("Pętla została wykonana " + iteration + " razy.");

while (x !== randomNumber) {
	randomNumber = Math.round(Math.random() * 100);
	console.log(randomNumber);
	iteration + 1;
}

console.log("Pętla została wykonana " + iteration + " razy.");
