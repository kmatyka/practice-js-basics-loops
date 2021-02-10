const x = 10;//10
let iteration = 0;
let randomNumber = -1;

const getRandomNumber =()=>{
    return Math.round(Math.random() * 10);
}

while(randomNumber!==x){
    randomNumber=getRandomNumber();
    iteration++;
}
console.log(`Liczba ${x} wylosowana za ${iteration} razem`)