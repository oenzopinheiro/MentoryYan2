const prompt = require("prompt-sync")()
var day1 = Number(prompt("Qual o primeiro dia? "))
var month1 = Number(prompt("Qual o primeiro mes? "))
var year1 = Number(prompt("Qual o primeiro ano? "))
var day2 = Number(prompt("Qual o segundo dia? "))
var month2 = Number(prompt("Qual o segundo mes? "))
var year2 = Number(prompt("Qual o segundo ano? "))

var resultMonth1 = Number(month1 * 30)
var resultYear1 = Number((year1 * 30) * 12)
var resultMonth2 = Number(month2 * 30)
var resultYear2= Number((year2 * 30) * 12)
var resultDate1 = Number(resultMonth1+ resultYear1 + day1)
var resultDate2 = Number(resultMonth2 + resultYear2 + day2)
var resultDay1= Number(resultDate1 - resultDate2)
var resultDay2 = Number(resultDate2 - resultDate1)


if (resultDate1 > resultDate2) {
    console.log(`A diferença entre as duas datas é ${resultDay1}`)
} else {
    console.log(`A diferença entre as duas datas é ${resultDay2}`)
}
