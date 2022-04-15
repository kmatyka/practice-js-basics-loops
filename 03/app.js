const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !==x) {
    iteration+=1;
    randomNumber = Math.round(Math.random() * 20);
}
console.log('Liczbę '+x+' wylosowano za '+iteration+' razem')