const randomNumber = Math.round(Math.random() * 20);
console.log('Wylosowana liczba to:' , randomNumber);

const limitNumber = 5;

if (randomNumber > limitNumber) {
    for(let i=limitNumber; i<=randomNumber; i++) {
       console.log(i);
    }
}

else {
  console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}