// Aula sobre a estrutura de repetição while. Aprendendo conceitos basicos.

/*
    numero = 0

    enquanto (numero menor que 10){
        exibirNoConsole('numero agora é ${numero}')
        numero++

    }
*/

//num = 10

//while (num >= 1){
//    console.log(`O número agora é ${num}`)
//    num-- 
//}

// Loops iinfinitos



// O exemplo abaixo é um loop pois o count nunca será maior do que 10
// E nem existe uma incrementação pra satisfazer isso, oque torna uma exibição de 0 infinitamente no console.

//let count = 0

//while (count < 10){
//    console.log(`O numero agora é ${count}`)
//}

let num = 100
while (num < 150) {
    console.log(`${num + 1}`)
    num--
}
