const x = 5;
let result = 0;

console.log('------- for ---------')
for(var i=1; i<=x; i++) {
    console.log(i + '. result = ' + result + ' + ' + i)
    result += i
}
console.log('result: ', result)

console.log('------- while ---------')
let j = 1
result = 0;
while(j <= x) {
    console.log(j + '. result = ' + result + ' + ' + j)
    result += j
    j++
}
console.log('result: ', result)





