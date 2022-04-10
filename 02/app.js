const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
    result += i;
    console.log(result);
}
console.log('ostateczna suma wszytkich liczb =', result);


result = 0;

let j = 1;
while (j <= x) {
    result += j;
    console.log(result);
    j++;


}
console.log('ostateczna suma wszytkich liczb obliczona za pomoca petli while=', result)