const x = 5;
let result = 0;

// for(let i = 1; i <= x; i++) {
//     result += i;

// }

let counter = 0;
while(counter <= x) {
    result += counter;
    counter++;
}

console.log(result);