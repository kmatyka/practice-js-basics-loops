const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x)
{
    randomNumber = Math.round(Math.random() * 20)
    iteration++
}
console.log(`Do wylosowania liczby ${x} potrzebnych było ${iteration} iteracji`)