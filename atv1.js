// Verificador de CPF
// Todo CPF tem 11 digitos.
// Os dois últimos são digitos verificadores, calculados com base nos 9 primeiros.
// O calculo dos digitos usa uma formula:
// Para o primeiro digito:
// Multiplique cada um dos 9 primeiros digitos por 10 a 2
// Some o resultado total
// divida por 11, considere apenas o resto da divisao
// Se o resto da divisão for menor que 2, então o dígito é igual a 0 (Zero).
// Se o resto da divisão for maior ou igual a 2, então o dígito verificador é igual a 11 menos o resto da divisão (11 - resto).
// Para o segundo digito:
// Faça o mesmo, porém multiplicando de 11 a 2

function calcularDigitos(cpf) {
    // Transformar os 9 primeiros números do CPF em uma lista
    let numeros = cpf.split("").map(Number)

    // Calcular o primeiro dígito
    let soma1 = 0
    let peso1 = 10 // Começa com peso 10
    for (let i = 0; i < 9; i++) {
        soma1 += numeros[i] * peso1
        peso1--; // Diminui o peso a cada passo
    }
    let resto1 = soma1 % 11
    let primeiroDigito = resto1 < 2 ? 0 : 11 - resto1

    // Adicionar o primeiro dígito para calcular o segundo
    numeros.push(primeiroDigito)

    // Calcular o segundo dígito
    let soma2 = 0
    let peso2 = 11 // Começa com peso 11
    for (let i = 0; i < 10; i++) {
        soma2 += numeros[i] * peso2
        peso2--; // Diminui o peso
    }
    let resto2 = soma2 % 11
    let segundoDigito = resto2 < 2 ? 0 : 11 - resto2

    return `${primeiroDigito}${segundoDigito}` // Retorna os dois dígitos
}

// Testar com um exemplo
let cpf = "123456789" // Use os 9 primeiros números do CPF
let digitosVerificadores = calcularDigitos(cpf)
console.log("Dígitos verificadores:", digitosVerificadores)
