const x = 5
let iteration = 0
let randomNumber

while (randomNumber !== x) {
  randomNumber = Math.floor(Math.random() * 10) + 1
  iteration++
}

console.log("Liczba iteracji: " + iteration)
