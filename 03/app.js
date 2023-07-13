const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber!==x){
    iteration++;
    randomNumber = Math.round(Math.random()*20);
}

console.log('Zgadłeś za: ' + iteration + ' razem.');