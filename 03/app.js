const x = 10;
let iteration = 0;
let randomNumber = -1;
while (true) {
    iteration++;
    randomNumber = Math.ceil(Math.random() * x); // Losuje liczbę od 1 do x

    if (randomNumber === x) {
        break; // Przerwij pętlę, gdy wylosowana liczba jest równa x
    }
}

// Wyświetlenie wyników
console.log(`Wylosowano liczbę ${randomNumber} po ${iteration} iteracjach.`);
