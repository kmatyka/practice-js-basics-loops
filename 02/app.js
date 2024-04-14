const x = 5;
let result = 0;

for (let i = 0; i < x; i++) {
	if(x < result) {
		x = x + result
	}
	console.log(result);
}
