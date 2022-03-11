const x = 5
let resultFor = 0
let resultWhile = 0

// for loop
for (let i = 1; i <= x; i++) {
    resultFor += i
}
console.log('For Loop: ', resultFor)

// do while loop
let i = 1
while (i <= x) {
    resultWhile += i
    i++
}
console.log('While Loop: ', resultWhile)
