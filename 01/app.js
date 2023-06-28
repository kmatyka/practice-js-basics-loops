const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber > 5) {
  let index = 5;
  while (index <= randomNumber) {
    console.log(index);
    index++;
  }
}
