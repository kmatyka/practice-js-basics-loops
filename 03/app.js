console.log('Zadanie ze stałym x !!!!!!!!!!!!!!!!!!!!!!!');

const x = 10;
let iteration = 0;
let randomNumber = -1;



while (x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 20);
    console.log('Wylosowano: ' + randomNumber);
    iteration++;

    if (x === randomNumber) {
        console.log(x + ' jest równe ' + randomNumber);
    } else {
        console.log(x + ' jest różne od ' + randomNumber);
    }
}

alert('Wartość zmiennej iteration wynosi: ' + iteration + ', (pętla wykonała się): ' + iteration + ' razy !!!');



console.log('Zadanie z podaniem zmiennej !!!!!!!!!!!!!!!!!!!!!!!');

const userNumber = parseInt(prompt('Podaj liczbę do porównania !!!'));
let iteration_2 = 0;
let randomNumber_2 = -1;

while (userNumber !== randomNumber_2) {
    randomNumber_2 = Math.round(Math.random() * 10);
    console.log('Wylosowano: ' + randomNumber_2);
    iteration_2++;

    if (userNumber === randomNumber_2) {
        console.log(userNumber + ' jest równe ' + randomNumber_2);
    } else {
        console.log(userNumber + ' jest różne od ' + randomNumber_2);
    }
}

alert('Wartość zmiennej iteration wynosi: ' + iteration_2 + ', (pętla wykonała się): ' + iteration_2 + ' razy !!!');