const x = 5;
let result = 0;

// for(let i=1; i<=x; i++) {
//     result = result + i;
//     console.log('i=',i,'result=',result)
// }
// console.log(result)

let i=1
while(i<=x) {
    result = result + i;
    i++
    console.log('i=',i,'result=',result)
}
console.log(result)