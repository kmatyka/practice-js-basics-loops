const x = 5
let result = 0
let result2 = 0

for (let i = 1; i <= x; i++) {
	result = result + (i - 1)
	// console.log(i + '. ' + 'result =' + ' ' + result + '+' + i)
	console.log(`${i}. result = ${result} + ${i}`)
}

console.log()

j = 1
while (j <= x) {
	result2 = result2 + (j - 1)
	console.log(`${j}. result = ${result2} + ${j}`)
	j++
}
