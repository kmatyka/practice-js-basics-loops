const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
const value = 5;
if(randomNumber > value) {
    for(let i=value; i<=randomNumber; i++) {
        console.log(i);
    }
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}
