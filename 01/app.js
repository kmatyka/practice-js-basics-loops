const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

const maxNumber = 5;

if (randomNumber > maxNumber) {
    for(let i=maxNumber; i<=randomNumber; i++) {
        console.log(i);
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}

