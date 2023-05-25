const prompt = require("prompt-sync")()
var date1 = prompt("Qual é a primeira data? ")
var date2 = prompt("Qual é a segunda data? ")
if (date1 == date2) {
    console.log(`São iguais`)
} else if (date1 > date2) {
    console.log(date1, date2 )
} else if (date2 > date1) {
    console.log(date2, date1)
} 