const x = 10;
let iteration = 0;
let randomToloop = -1;


while(randomToloop !== x) {

randomToloop = Math.round(Math.random() * 20)
iteration++
console.log(randomToloop, "no" + iteration)
}

console.log("number of iteration:" + iteration)