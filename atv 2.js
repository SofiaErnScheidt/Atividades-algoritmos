// Algoritmo gerador de CNPJ
// Pesquisar as regras online e criar um algoritmo que gere um cnpj válido

function validaCNPJ(cnpj) {
    var numeros = cnpj.replace(/[^0-9]/g, '')

  
    if (numeros.length !== 14 || numeros === '00000000000000') {
        return false
    }

    
    var soma = 0
    var pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    for (var i = 0; i < 12; i++) {
        soma += numeros[i] * pesos[i]
    }
    var resto = soma % 11
    var digito1 = resto < 2 ? 0 : 11 - resto
    if (numeros[12] != digito1) {
        return false
    }

    
    soma = 0
    pesos.unshift(6)
    for (var i = 0; i < 13; i++) {
        soma += numeros[i] * pesos[i]
    }
    resto = soma % 11
    var digito2 = resto < 2 ? 0 : 11 - resto
    if (numeros[13] != digito2) {
        return false
    }

    return true 

}
console.log(validaCNPJ("12345678000195"))
