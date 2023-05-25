const prompt = require("prompt-sync")()
var day = Number(prompt("Informe um dia ? "))
var month = Number(prompt("Informe um mês ? "))
var year = Number(prompt("Informe um ano ? "))
var validDate = true

if (month < 1 || month > 12) {
    validDate = false
}

if (day < 1 || day > 31) {
    validDate = false
} else {
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day > 30) {
        validDate = false
    }
  } else if (month == 2) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      if (day > 29) {
        validDate = false
      }
    } else {
      if (day > 28) {
        validDate = false
      }
    }
  }
}

if (validDate) {
  console.log("Data válida")
} else {
  console.log("Data inválida")
}