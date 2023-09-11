const x = 10;
let iteration = 0;
let randomNumber = -1;
while (randomNumber !== x) {
    iteration++;
    randomNumber = Math.round(Math.random() * x); // Losuje liczbę od 1 do x
}

// Wyświetlenie wyników
console.log(`Wylosowano liczbę ${randomNumber} po ${iteration} iteracjach.`);
