const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber > 5) {
  for (let i = 5; i <= randomNumber; i++) {
    console.log(i);
  }
} else {
  console.log('Liczba ' + randomNumber + ' jest zbyt mała, aby użyć pętli!');
}
