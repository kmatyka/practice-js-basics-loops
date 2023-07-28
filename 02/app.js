const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
	result += i;
	console.log(i + '.result = ' + result);
}
console.log('%c----------------', 'color: green;');
let a = 1;
while (a <= 5) {
	result += a;
	console.log(a + '.result = ' + result);
	a++;
}
