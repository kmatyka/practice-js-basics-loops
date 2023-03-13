const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber)
const showNumbers = num => {
    if (num > 5) {
        for (let i = 5; i <= num; i++) {
            console.log(i);
        }
    } else {
        console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
    }
}

showNumbers(randomNumber)
