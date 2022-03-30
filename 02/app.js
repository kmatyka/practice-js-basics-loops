const x = 5;
let result = 0;


for (let i = 1; i <= x; i++) {

    console.log('result = ' + result + ' + ' + i);
    result += i;

}

console.log('Wynik końcowy to : ' + result);

result = 0;
let counter = 1;

while (counter <= x) {
    console.log('result = ' + result + ' + ' + counter);
    result += counter;
    counter++;
}
console.log('Wynik końcowy to : ' + result);