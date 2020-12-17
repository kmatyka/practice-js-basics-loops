const randomNumber = Math.round(Math.random() * 20);
console.log('Your random number is: ' + randomNumber);


if (randomNumber > 5) {
  for(let i = randomNumber; i >= 0; i--) {
    console.log(i);
  }
} else {
console.log(`Your number: ${randomNumber} is lower than 5. Sorry! Try Again`);
}