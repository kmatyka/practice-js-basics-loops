const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
  result = result + i;
  console.log(i + '. ' + 'result = ' + result);
}

result = 0;

let j = 1;
while(j <= x){
    result = result + j;
    console.log(j + '. ' + 'result = ' + result);
    j++;
}