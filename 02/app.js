const x = 5
let result = 0

for (let i = 1; i <= x; i++) {
	// console.log(i);
	
	result = result + i
}
console.log(`result = ${result}`);


while (result <= x) {
	result = result + x
	i++
}
console.log(`result = ${result}`);