const x = 5;
let result = 0;

// Pętla for, wynik kumulowany + finalny

for (let i = 1; i <= x; i++) {
  result = result + i;
  console.log(i + '. ' + 'result = ' + result);
}
console.log(result);

// Pętla while, wynik kumulowany + finalny

result = 0;

let j = 1;
while(j <= x){
    result = result + j;
    console.log(j + '. ' + 'result = ' + result);
    j++;
  }
  console.log(result);