const randomNumber = Math.round(Math.random() * 20);
const numbersToLog = [];
console.log(randomNumber);

if (randomNumber>5) {
    for(let i=5; i<=randomNumber; i++) {
        numbersToLog.push(i);
    }
    console.log(numbersToLog)
} else {
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}