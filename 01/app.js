const randomNumber = Math.round(Math.random() * 20);
document.write('Wylosowana liczba to: ' + randomNumber + '<br>');

if (randomNumber > 5) {
    document.write('Liczby od 5 do wylosowanej wartości to:');
    for (i = 5; i <= randomNumber; i++) {
        document.write(i + ',');
    }
} else {
    document.write('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}