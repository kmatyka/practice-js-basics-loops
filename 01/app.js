const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
let j=randomNumber;

for(j=randomNumber; j>=5 && j<=20; j--) {
    console.log(j); 
}
if(j <5) {
    console.log('Nie mozna wykonać pętli liczba: ' + j + ' mniejsza od 5');
}
