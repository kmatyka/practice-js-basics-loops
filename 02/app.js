
console.log('Zadanie z pętlą for !!!!!!!!!!!!!!!!!!!!!!!');
const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
    console.log('result = ' + result + ' + ' + i);
    result += i;
}

console.log('Suma = ' + result);


console.log('Zadanie z pętlą while !!!!!!!!!!!!!!!!!!!!!!!');
let k = 1;

while (k <= x) {
    console.log('result = ' + result + ' + ' + k);
    result += k;
    k++;
}

console.log('Suma = ' + result);


console.log('Zadanie z pętlą for (dodatkowe) !!!!!!!!!!!!!!!!!!!!!!!');
const userNumber = parseInt(prompt('Podaj liczbę, a ja Ci ją zsumuję!!!'));

let result_2 = 0;

for (let j = 1; j <= userNumber; j++) {
    console.log('result = ' + result_2 + ' + ' + j);
    result_2 += j;
}

console.log('Suma wszystkich licz wynosi: ' + result_2);
