const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

/// Anwer for the exercise

if(randomNumber > 5){
    let i = 5
    while(i <= randomNumber) {
        console.log(i)
        i++
    }
} else alert("Wylosowana liczba jest zbyt mała, aby użyć pętli")