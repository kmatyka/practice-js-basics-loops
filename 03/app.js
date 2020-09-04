// Zdecydowałam, by ograniczyć przedział losowanych liczb, czyniąc x największą liczbą w przedziale.
const x = 3;
let iteration = 1;
let randomNumber = 0;

while (randomNumber !== x) {
	randomNumber = Math.round(Math.random() * x);
	if (randomNumber === x) {
		console.log('Good! You hit ' + x + ' after' + ' ' + iteration + ' times.');
	} else {
		console.log(randomNumber + ' is not what we want and we want ' + x);
	}
	iteration++;
}
