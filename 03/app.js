const x = 10;
let iteration = 0;
let randomNumber = rand()
while(randomNumber!=x){
    iteration++;
    randomNumber = rand()
}
console.log(iteration)
function rand(){
    return Math.round(Math.random() * 20);
}