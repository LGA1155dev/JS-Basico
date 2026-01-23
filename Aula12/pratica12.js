// Faça um window.prompt que pergunte nome, idade e sexo, e depois mostra tudo dentro da função:

//const nome = window.prompt('Seu nome')
//const idade = window.prompt('Sua idade')
//const Sexo = window.prompt('Seu sexo')

function nome () {
    window.prompt('Qual seu nome:')
}

function idade () {
    window.prompt('Qual sua idade')
}

function sexo () {
    window.prompt('Qual seu sexo')
}

let pessoa = {
    nome: prompt('Seu nome'),
    idade: prompt('Sua idade'),
    Sexo: prompt('Seu sexo')
}

console.log(pessoa)


