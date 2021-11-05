
const x = 12;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++;
}
console.log("Wylosowano liczbe 12 za " + iteration + " razem" );