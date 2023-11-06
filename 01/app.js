const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

const checkNumber = (number) => {
  if (number >= 5) {
    for (let i = 4; i < number; i++) {
      console.log(i + 1);
    }
  } else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
  }
};
checkNumber(randomNumber);
