const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber >= 5) {
    for (let num = randomNumber; num <= 20; num++) {
        console.log(num++)        
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}