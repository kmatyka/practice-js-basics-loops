const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber > 5) {
    // zrób to jeśli większa od 5

    for(let i=5; i<=randomNumber; i++) {
        console.log(i);
    }
} else {
    // zrób to jeśli nie
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}
