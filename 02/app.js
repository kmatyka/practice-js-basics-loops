const x = 5;
let result = 0;

// for (let i = 1; i <= x; i++) {
// 	result += i;
// 	console.log(`Suma kolejnych ${i} liczb wynosi ${result}`);
// }
// console.log(`Suma kolejnych liczb od 1 do x wynosi ${result}`);

let i = 1;
while (i <= x) {
	result += i;
	console.log(`Suma kolejnych ${i} liczb wynosi ${result}`);
	i++;
}
console.log(`Suma kolejnych liczb od 1 do x wynosi ${result}`);
