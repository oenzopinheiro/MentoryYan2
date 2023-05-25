const prompt = require("prompt-sync")()

var numberOne = Number(prompt("Qual o primeiro número? "))
var numberTwo = Number(prompt("Qual o segundo número? "))
var numberTree = Number(prompt("Qual o terceiro número? "))
if (numberOne < numberTwo && numberTwo < numberTree) {
    console.log(numberOne, numberTwo, numberTree) 
} else if (numberOne < numberTree && numberTree < numberTwo) {
    console.log()
}
