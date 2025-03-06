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

//função para verifir o cpf 
//def variavel e a formula para o caluclo dos dígitos
function calcularDigito(cpf, multiplicadores) {
    let soma = 0;
    for (let i = 0; i < multiplicadores.length; i++) {
        soma += cpf[i] * multiplicadores[i]
    }
    let resto = soma % 11
    return resto < 2 ? 0 : 11 - resto
}

function verificarCPF(cpf) {
    if (cpf.length !== 11) {
        return false
    }
    // converter para um array de números
    cpf = cpf.split('').map(Number)

    // multiplica para o primeiro dígito verificador (10 a 2)
    let multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    let digito1 = calcularDigito(cpf, multiplicadores1)

    // miltiplica para o segundo dígito verificador (11 a 2)
    let multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    let digito2 = calcularDigito(cpf.concat(digito1), multiplicadores2)

    // verficar os dígitos 
    return digito1 === cpf[9] && digito2 === cpf[10]
}

// uso naa prática
let cpf = "12059779900"
if (verificarCPF(cpf)) {
    console.log("CPF válido")
} else {
    console.log("CPF inválido")
}