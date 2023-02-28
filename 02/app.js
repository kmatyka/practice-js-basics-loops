const x = 5;
let result = 0;

for(let i = 1; i <= x; i++) {
    if(i===x) {
        result=result+i;
        console.log(result);
    } else {
        result=result+i;
    }
}

result = 0;
let j=1;

while (j<=x) {
    if(j===x) {
        result=result+j;
        console.log(result);
        j++;
    } else {
        result=result+j ;
        j++;
    }
}