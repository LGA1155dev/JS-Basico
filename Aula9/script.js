// Hoisting no JS

//Exemplo 1:

// o hoisting é o içamento da variavel, como se jogassem ela pra cima no exemplo abaixo

//foo = 2;
//console.log(foo)
//var foo;

// // é implicitamente entendido como:
// var foo:
// foo = 2;


//Exemplo 2:

// hoisted(); // faz o log fa string "foo"

//function hoisted(){
//     console.log("foo")
//}


//bar = 2
//console.log(bar)

//Somente declarações são elevadas. Inicializações não faem parte do hoisting.


//Ex:

var x  = 10;

console.log(x, y)

var y = 7;
