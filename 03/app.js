const x = 10
let iteration = 0
let randomNumber = 0

while (x !== randomNumber) {
	randomNumber = Math.round(Math.random() * 10)
	iteration = iteration + 1
}

console.log(x)
console.log(randomNumber)
console.log(iteration)
