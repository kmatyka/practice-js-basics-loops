const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber > 5) {
    console.log('wieksza od 5')
    const diff = randomNumber - 5;
    for(i = 5; i <= randomNumber; i++) {
        console.log(i);
    }
} else {
    console.log('Wylosowana liczba nie jest większa od 5');
}