const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber <= 5) {
    console.log(`Wylosowana liczba jest mniejsza od 5 - nie mozna uzyc petli`)
}
else
    for (let i = 5; i <= randomNumber; i++) {
        console.log(i);
    }
