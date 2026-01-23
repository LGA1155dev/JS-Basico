// Objetos no Java Script

/*

Um objeto é uma relação de dados relacionados e/ou funcionalidades (que geralmente consistem em diversas variaveis e funções - que são chamadas propriedades e métodos quando estão dentro de um objeto)

*/

// Objetos podem ser Inicalizados usando new Object(), Object.creat() ou usando a forma notaçãp literal.

// Inicializando um objeto usando a notação literal

const objetoVazio = {
   nome: "Gabriel",
   idade: 15,
   Estuding: "Web Development"
}


// Dot notation (notação de ponto)

// Serve para acessar ou declarar uma nova propriedade ou metodo.

// Dclarando objeto de forma literal:


/*

const ObjetoTeste = {
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metodo: function () {
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto"
    }
}


console.log( ObjetoTeste.prop1 )
console.log( ObjetoTeste.metodo() )


*/

/*

dotNotation = {
 
}

//Declarando uma nova propriedade e depois um novo  metodo
dotNotation.prop2 = "Sou outra propriedade com valor tipo string"
dotNotation.metodo2 = () => "Sou o retorno de outro método."



// Acessando os novos componentes:
console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())

*/

// Bracket notation (notação colchete)

// Uma outra forma de acessar componentes de um objeto é por meio da notação de colchetes.

const bracketNotation = {
    prop1: "Sou uma propriedade que será acesssada usando bracket notation.",
    metodo: function () {
        return "Sou  o retorno de um método, ou seja, uma função dentro de um objeto."
    }
}

// Acessando elementos de um objeto por meio do bracket notations:
console.log( bracketNotation['prop1'])
console.log( bracketNotation['metodo']())


//Declarando novos componentes do objeto:

bracketNotation['prop2'] = "Sou outra propriedade com valor do tipo string."
bracketNotation['metodo2'] = () => "Sou o retorno do outro método."

console.log( bracketNotation )
console.log( bracketNotation['prop2'] )
console.log( bracketNotation['metodo2']() )