const x = 10;
let iteration = 0;
let randomNumber = -1;


///Rozwiązanie zadania
while(randomNumber !== x) {
    randomNumber = Math.floor(Math.random() * 21)
    iteration++
}

console.log(iteration)