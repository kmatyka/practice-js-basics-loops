const x = 5;
let iteration = 0;
let randomNumber = null;


while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 5)
    iteration++;


}

console.log("liczba wykonanej pętli to: " + iteration)