const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
let elementNumber = 5

if (randomNumber>5) {
        for(elementNumber; elementNumber<=randomNumber; elementNumber++) {
            console.log(elementNumber) 
        }  
} else {
    console.log("number less than 5. We can't use loop")
}
