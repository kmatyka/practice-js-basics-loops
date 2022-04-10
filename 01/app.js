//is randomNumber>5?
//if yes then console.log all numbers from 5 till randomNumber
//if no then console.log("Wylosowana liczba jest zbyt mała, aby użyć pętl")


const randomNumber = Math.round(Math.random() * 20);
console.log('Wylosowana liczba randomowa =', randomNumber);

if (randomNumber > 5) {
    for (let i = 5; i <= randomNumber; i++) {
        console.log(i);
    }
} else {

    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}