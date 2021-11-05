const randomNumber = Math.round(Math.random() * 20);
console.log('Wylosowana liczba: ' + randomNumber);

if(randomNumber>=5) {
    for(let j=randomNumber; j>=5 && j<=20; j--)
    console.log(j);
    
}else {
    console.log('Nie mozna wykonać pętli liczba mniejsza od 5');
}
