const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
	result += i;
	console.log(result);
}

let i = 0;
while (i < x) {
	result += i + 1;
    i++;
	console.log(result);
}
