const x = 5
let result = 0

for (let i = 1; i <= x; i++) {
	result += i
}
console.log(`${result} wynik z pętli for`)

let j = 0
let result2 = 0
while (j <= x) {
	result2 += j
	j++
}
console.log(`${result2} wynik z pętli while`)
