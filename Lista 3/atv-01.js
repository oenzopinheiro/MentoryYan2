const prompt = require("prompt-sync")()

var numberOne = Number(prompt("Qual o primeiro número? "))
var numberTwo = Number(prompt("Qual o segundo número? "))

if (numberOne == numberTwo) {
    console.log(`São iguais`)
} else {
    if (numberOne > numberTwo) {
console.log(numberOne, numberTwo)
} else if (numberTwo > numberOne) {
    console.log(numberTwo, numberOne)
}
}