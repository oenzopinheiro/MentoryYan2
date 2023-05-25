const prompt = require("prompt-sync")()
var day = Number(prompt("Qual o primeiro dia? "))
var month = Number(prompt("Qual o primeiro mes? "))
var year = Number(prompt("Qual o primeiro ano? "))
var calculationDay = day - 1
var calculationMonth = (month * 30) - (1 * 30)
var calculationYear = (year * 30 * 12) - (1960 * 30 * 12)
var result = calculationDay + calculationMonth + calculationYear

if (day >= 1 && day <= 30 && month >= 1 && month <= 12 && year >= 1960 ) {
    console.log(result)
} 