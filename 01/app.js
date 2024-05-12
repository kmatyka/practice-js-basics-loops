const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

for (let i = 5; i <= randomNumber; i++) {
	console.log(i);
}
if (randomNumber < 5) {
	console.log("wlosowana liczba jest za mala");
}
