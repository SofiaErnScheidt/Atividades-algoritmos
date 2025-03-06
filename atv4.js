// Algoritmo verificador de cartão de crédito.
// Pesquisar as regras online e criar um algoritmo que verifique se um numero de cartão é valido

function verificarCartao(numeroCartao) {
    let digitos = numeroCartao.split('').map(Number)
    let digitoVerificador = digitos.pop()
    let soma = 0

    digitos.reverse().forEach((digito, i) => {
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) digito -= 9
        }
        soma += digito
    })

    soma += digitoVerificador
    return soma % 10 === 0
}

let numeroCartao = "4532015112830366" 
if (verificarCartao(numeroCartao)) {
    console.log("O número do cartão é válido!")
} else {
    console.log("O número do cartão é inválido.")
}

