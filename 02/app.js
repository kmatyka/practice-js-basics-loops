const x = 5;
let result = 0;

for(let i = 1;i<=5;i++){
    // result= result + i;
    console.log('obliczanie:'+(result += i))
    console.log(result);
}