const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber + 'to');

if (randomNumber > 5) {
    for (let i = 5; i <= randomNumber; i++) {
        const result = i
        console.log(result)
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
}