const randomNumber = Math.round(Math.random() * 20);
console.log('random number is ', randomNumber);

if(randomNumber > 5) {
    console.log('random number larger than 5 so print from 5 to ', randomNumber )
    for(var i=5; i<=randomNumber; i++) {
        console.log(i)
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
}