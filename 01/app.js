const randomNumber = Math.round(Math.random() * 20)

if (randomNumber > 5) {
    console.log(randomNumber)
    let numbers = []
    for (let i = 5; i <= randomNumber; i++) {
        numbers.push(i)
    }
    console.log(numbers)
} else {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
}