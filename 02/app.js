const x = 5;
let result = 0;
let result2 = 0;  //dla while

// for

for (let i = 1; i <= x; i++) {
    result += i;
    console.log(result);
}

// while 

let j = 1;
while (j <= x) {
    result2 += j;
    console.log(result2);
    j++;
}