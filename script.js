// Primeira Função, que verifica Numeros ímpares e múltiplos de 5;

function snapCrackle(maxValue) {
    let newString = '';

    for (i = 1; i <= maxValue; i++) {
        if ((i % 2 == 1) && !(i % 5 == 0)) {
            newString += 'Snap, '
        } else if (!(i % 2 == 1) && (i % 5 == 0)) {
            newString += 'Crackle, '
        } else if ((i % 2 == 1) && (i % 5 == 0)) {
            newString += 'SnapCrackle, '
        } else if (!(i % 2 == 1) && !(i % 5 == 0)) {
            newString += (`${i}, `)
        }
    }
    return newString
}
// Chamada da função 
console.log(snapCrackle(12))


// ------------------------------BONUS--------------------------------------


// Função para verificar se indice é um número primo
function verificarPrimo(indice) {

    for (let Count = 2; Count < indice; Count++)
        if (indice % Count === 0) {
            return false;
        }
    return indice > 1;
}


// Função bonus, que verifica primos, ímpares e multiplos de 5;
function snapCracklePrime(maxValue) {
    let newString = '';

    for (i = 1; i <= maxValue; i++) {

        if ((i % 2 == 1) && !(i % 5 == 0)) {
            if (verificarPrimo(i)) {
                newString += 'SnapPrime, '
            } else {
                newString += 'Snap, '
            }

        } else if (!(i % 2 == 1) && (i % 5 == 0)) {
            if (verificarPrimo(i)) {
                newString += 'CracklePrime, '
            } else {
                newString += 'Crackle, '
            }

        } else if ((i % 2 == 1) && (i % 5 == 0)) {
            if (verificarPrimo(i)) {
                newString += 'SnapCracklePrime, '
            } else {
                newString += 'SnapCrackle, '
            }

        } else if (!(i % 2 == 1) && !(i % 5 == 0)) {
            if (verificarPrimo(i)) {
                newString += 'Prime, '
            } else {
                newString += (`${i}, `)
            }
        }
    }
    return newString

}

console.log(snapCracklePrime(15))