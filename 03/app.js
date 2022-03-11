const x = 2
let iteration = 0
let randomNumber = -1

while (x !== randomNumber) {
    const findX = Math.round(Math.random() * x)
    console.log({findX})
    findX === x ? randomNumber = findX : console.log('jedziemy dalej')
    iteration++
}
console.log({ iteration })
console.log({ randomNumber })