console.log('Pętla For')
const x = 5;
let resultFor = 0;
for(let i=1; i<=x; i++) {
    resultFor=resultFor+i;
    console.log(resultFor);
}
console.log('Pętla While')

let resultWhile = 0
let cycle = 1;
while(cycle <= x) {
    resultWhile=resultWhile+cycle;
    console.log(resultWhile);
    cycle++;
}