const randomNumber = Math.round(Math.random() * 20);
console.log(`Wylosowana liczba to: ${randomNumber}`);

if (randomNumber > 5) {
  let numberRange = [];

  for (let i = 5; i <= randomNumber; i++) {
    numberRange.push(i);
  }

  console.log(`Wylosowane liczby to: ${numberRange.join(", ")}`);
} else {
  console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}
