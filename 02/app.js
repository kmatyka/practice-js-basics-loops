const x = 5;
let resultForLoop = 0;

for (let z=1; z<=x; z++) {

    resultForLoop = resultForLoop + z;

}

console.log(resultForLoop);


let resultWhileLoop = 0;
let i = 1;
while(i<=x) {
    resultWhileLoop = resultWhileLoop + i;

    i++;
}

console.log(resultWhileLoop);