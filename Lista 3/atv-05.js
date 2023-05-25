const prompt = require("prompt-sync")()
var value1 = Number(prompt("Qual o primeiro valor? "))
var value2 = Number(prompt("Qual o segundo valor? "))
var value3 = Number(prompt("Qual o terceiro valor? "))
if (value1 < value2 && value1 < value3){
    console.log(value1)
} else if  (value2 < value1 && value2 < value3)    {
    console.log(value2)
} else if  (value3 < value1 && value3 < value1)    {
    console.log(value3)
} 