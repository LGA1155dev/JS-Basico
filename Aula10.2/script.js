//Premissas

//P1: Eu gosto de Pentest
//P2: Eu gosto de programação em Js

/*
Quando quero juntar elas em uma única sentença, posso usar o conectivo 'E' ou 'OU':

Eu gosto de Pentest 'E' gosto de Programação em Js
Eu gosto de Pentest 'OU' gosto de Programação em Js

No primeiro exemplo, a expressão toda só será verdadeira, se ambas as posições (p1 e p2) sozinhas forem verdadeiras.
Caso contrario toda expressão se torna falsa

No segundo, a expressão inteira é verdadeira, se ao menos 1 das premissas p1 ou p2 for verdadeiras.


Em linguagem tipo js o 'E' é representado com (&&) e o 'OU' (||):
*/

//const num1=1;const num2=2;

//if(num1 == 10 && num2==2){
//    console.log('Verdadeiro')
//} else{
//    console.log('Falso')
//}

//const string1 = 'Java';
//const string2 = 'Script';

//if (string1 === 'Java' || string2 === 'PHP'){
//    console.log('Verdade')
//} else{
//    console.log('Falso')
//}

/*
const item = 5;

switch (item){
    case 1:
        console.log('One')
        break
    case 2:
        console.log('Two')
        break
    case 3:
        console.log('Tre')
        break
    case 4:
        console.log('For')
        break
    case 5:
        console.log('Five')
        break
    case 6:
        console.log('Six')
        break
    case 7:
        console.log('Seven')
        break
    case 8:
        console.log('Eight')
        break
    case 9:
        console.log('nine')
        break
    default:
        console.log('Número invalido')
        break
    
    
}
*/

//Operadores Ternários:

//Exemplo:



const idade = 17;

idade >= 18 ? console.log('+18') : console.log('-18');

// Traduzindo pra pt-br

/*
constante idade recebe 17;

se a idade for maior ou igual a 18 anos que o '?' é interpretado comi tipo uma pergunta, se é true ou false
se o js responder o '?' com sim é verdade o 'idade' tem 18 ou mais, executa uma ação que é o console.log('+18')
se não que é representado com ':', ou seja, se a primeira condição retornar falso, ou seja o 'idade' não tem 18 ou mais
irá executar o outro console.log que é console.log('-18')

*/