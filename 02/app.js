const x = 5;
let result = 0;

console.log('for loop');
for(let i=1; i<=x; i++) {
    console.log('result = '+ result +' + '+ i);
    result += i;
    console.log('result = '+ result);
}

console.log('while loop');
i=1;
result=0;
while(i<=x) {
    console.log('result = '+ result +' + '+ i);
    result += i;
    console.log('result = '+ result);
    i++;
}