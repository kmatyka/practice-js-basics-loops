const x = 5;
let result = 0;

for(i=result; i <= x; i++) {
    console.log("for");
    console.log(result, i);
    console.log(result += i);
}

let j = 0;
result = 0;
while(j <= x) {
    console.log("while");
    console.log(result, j);
    console.log(result += j);
    j++;
}