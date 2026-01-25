//Aula 15


// escopos, temos dois tipos, o local e o global

//console.log(nomeCarro)

function carros() {
    var nomeCarro = "Ferrari";

    console.log(nomeCarro)
    // código aqui pode usar nomeCarro
}

carros()

// Exemplo de escopo global

var NomeCarro = "Mustang";

// Código aqui pode ser usado NomeCarro
console.log(NomeCarro)

function Carros() {
    // Código aqui pode usar NomeCarro
    console.log(NomeCarro)
}


// Escopos de função e escopo de bloco

for (let i = 0; i < 10; i++)
    console.log(i)
for(var j = 0; j < 10; j++)
    console.log(j)