const randomNumber = Math.round(Math.random() * 20);

console.log(randomNumber);

if (randomNumber >= 5) {
    console.log('Liczba ' + randomNumber + ' jest większa bądź równa 5. Kolejne liczyby: ')
    for (let i = 5, j = 1; i <= randomNumber; i++, j++) {
        console.log(j + '.' + ' Liczba: ' + i);
    }
} else {
    alert('Wylosowana liczba: ' + randomNumber + ' jest zbyt mała, aby użyć pętli');
}

