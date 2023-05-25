const prompt = require("prompt-sync")()

var track = Number(prompt("Qual o comprimento da pista em metros? "))
var carOne = Number(prompt("Quanto tempo em segundos o primeiro carro demorou para completar? "))
var carTwo = Number(prompt("Quanto tempo em segundos o segundo carro demorou para completar? "))
var timeOne = track / carOne
var timeTwo = track / carTwo
if (timeOne > timeTwo){
    console.log("O primeiro carro e mais rapido que o segundo carro com a velocidade de",timeOne,"km/h.")
} else if (timeTwo > timeOne){  
    console.log("O segundo carro é mais rapido do que o primeiro carro com a velocidade de",timeTwo,"km/h.")
}
