const x = 5;
let result = 0;

// FOR LOOP
for (let i = 0; i <= x; i++) {
	result += i;
}
console.log(`For result = ${result}`);

// WHILE LOOP
let result2 = 0;
let i = 0;
while (i <= x) {
	result2 += i;
	i++;
}
console.log(`While result = ${result2}`);
