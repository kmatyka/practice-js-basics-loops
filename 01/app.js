const randomNumber = Math.round(Math.random() * 20);

if (randomNumber > 5) {
    console.log(`Wylosowana liczba to ${randomNumber}, zatem odliczamy od 5 do ${randomNumber}:`)
    for (let i=5; i <= randomNumber; i++) {
        console.log(i);
    }
} else {
    console.log(`Wylosowana liczba (${randomNumber}) jest zbyt mała, aby użyć pętli`);
}
