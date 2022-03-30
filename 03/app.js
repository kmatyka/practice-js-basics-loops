const x = 10;
let iteration = 0;
let randomNumber = -1;

console.log("Losujemy liczbę z przedziału 0-30. Za którym razem uda się wylosować liczbę " + x + "?");

while (randomNumber != x) {
    randomNumber = Math.round(Math.random() * 30);
    iteration++;
    console.log(randomNumber);
};

console.log("Udało się wylosować liczbę za " + iteration + " razem.");
