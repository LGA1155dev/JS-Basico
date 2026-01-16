
// Aqui eu declaro uma função com o nome soma que recebe os parametrôs num1 e num2
//function soma (num1, num2){
    //Aqui eu crio uma constante com o nome soma e ela vai receber o resultado da soma do num1 com o num2
//    const sum = num1 + num2
    //Aqui vai retornar o valor da soma
//   return sum
//}

//console.log(soma(15, 30))

//const resultado = soma(15, 30)

//console.log(resultado)

//console.log(resultado + 10)


//aqui cria uma function anonima e coloca os parametros num1 e num2
//const SomaAnonima = function(num1, num2){
    //aqui retorna o resultado da soma de num1 + num2
//    return num1 + num2
//}

//console.log( SomaAnonima(20, 20) )

const somaArrow = (num1, num2) => {
    return num1 + num2
}

const somaArrowReduce = (num1, num2) => num1 + num2

console.log( somaArrowReduce(200, 200))

console.log(somaArrow(10, 10))

