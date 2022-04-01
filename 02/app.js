const x = 5;
let result = 0;
let counterWhile = 0;

for (let i = 0; i <= x; i++){
    result += i;
    console.log(result);
};

while (counterWhile < x - 1 ) {
    counterWhile += 1;
    result += counterWhile;
    console.log(result);
};
