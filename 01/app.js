const randomNumber = Math.round(Math.random() * 20);
console.log('wylosowana liczba:' + randomNumber);

if(randomNumber >= 5){
    for(let i = randomNumber;i<=20;i++){
        console.log(i)
    }
}
else if(randomNumber < 5) {
    console.log('Wylosowana liczba jest zbyt mala aby ja wyswietlic');
}
