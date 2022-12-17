const randomNumber = Math.round(Math.random() * 20);

if(randomNumber >5){
    for(let i = 5; i < randomNumber; i++)
    console.log(i);

}else{
    console.log(alert('"Wylosowana liczba jest zbyt mała, aby użyć pętli"'));
}
console.log(randomNumber);





