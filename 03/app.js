const x = 10;
let iteration = 0;
let randomNumber = -1;


while (randomNumber !== x){
  randomNumber = Math.round(Math.random() * x);
  iteration++;  
  console.log(`${iteration} numer iteracji - ${randomNumber} wylosowana liczba`);
}
console.log(`${iteration} - finalna iteracja`)


