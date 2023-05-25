var nameOne = prompt("Digite o primeiro nome ? ")
var nameTwo = prompt("Digite o segundo nome ? ")
var nameThree = prompt("Digite o terceiro nome ? ")

if (nameOne < nameTwo && nameOne < nameThree) {
    if (nameTwo < nameThree) {
        console.log(nameOne, nameTwo, nameThree);
    } else {
        console.log(nameOne, nameThree, nameTwo);
    }
} else if (nameTwo < nameOne && nameTwo < nameThree) {
    if (nameOne < nameThree) {
        console.log(nameTwo, nameOne, nameThree);
    } else {
        console.log(nameTwo, nameThree, nameOne);
    }
} else if (nameThree < nameOne && nameThree < nameTwo) {
    if (nameTwo < nameOne) {
        console.log(nameThree, nameTwo, nameOne);
    } else {
        console.log(nameThree, nameOne, nameTwo);
    }
}