const x = 5;
let result = 0;

for (let i=0; i<=5; i++) {
    result += i;
    console.log(result);

    if(result === 15) {
        console.log("sum total");
    }
}

let i=0;
while (i<=5) {
    result += i;
    console.log(result);
    i++;
}