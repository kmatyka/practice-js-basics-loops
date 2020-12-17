const x = parseInt(prompt(`Podaj liczbe`));
let iteration = 0;
let randomNumber = -1;


while(x !== randomNumber) {
	randomNumber = Math.round(Math.random() * x);
  iteration++
}

 console.log(`Twoja liczba to ${x}. Zeby odgadnac twoja liczbe potrzebowalem ${iteration} prob`);