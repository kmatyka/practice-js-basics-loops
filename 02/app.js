const x = 5
let result = 0
for (let i = 1; i <= x; i++) {
	console.log(`result= ${result} + ${i}`)
	result = result + i
}
console.log('------')

let j = 0
let result2 = 0
while (x > j) {
	console.log(`result= ${(result2 = result2 + j++)} + ${j}`)
}
