const x = 10;
let iteration = 0;
let randomNumber;

while (x !== randomNumber) {
	randomNumber = Math.round(Math.random() * 20);
	iteration++;
}

console.log(
	`Aby wylosować przechowywaną liczbę, pętla wykonała się ${iteration} razy.`
);
