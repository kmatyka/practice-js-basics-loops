const x = 5;
let result = 0;


let result1 = 0


console.log("For loop: adding numbers")
for (let i=1; i<=x; i++) {
    
    result = result + i
   
    console.log(result)
}
console.log("While loop: adding numbers")

let i=1
while(i<=x) {
    result1 = result1 + i
    
    console.log(result1)
    i++
}