const randomNumber = Math.round(Math.random() * 20);
document.write('Wylosowana liczba to: ' + randomNumber + '<br>');

if (randomNumber > 5) {
    document.write('Liczby od 5 do wylosowanej wartości to:');
    for (let i = 5; i <= randomNumber; i++) {
        // działa bez deklaracji let dla i ale rozumiem, że deklarowanie zminnej jest dobra praktyką??
        document.write(i + ',');
    }
} else {
    document.write('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}