let anonimaf = function(){
    return 'Hello world'
}

console.log(anonimaf)
console.log(anonimaf())

let Firefox = ()  =>  {
    console.log('Navegador')
}

// IIFE (Immediately Inbvoked Function Expression - ou Função iamediata)

let retornoDaIIFE = (function(){
    return 'Sou o retorno da função IIFE ou Função imadiata'
})()

console.log(retornoDaIIFE)