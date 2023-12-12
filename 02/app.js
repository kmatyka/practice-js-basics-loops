/*  const x = 5;
    let result = 0;

    for(let i=1; i<=x; i++) {
        result = result + i;
    }

    console.log(result);

    let i = 1;
    while(i<=5) {
        result = result + i;

        i++;
    }

    console.log(result, 'loops while'); */

const x = 10;
let iteration = 0
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++;
    console.log(randomNumber, iteration)
}
console.log(x,'Finished for',iteration, 'times')