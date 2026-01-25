// Escopos parte 2

function ParamsLocais(local1, local2) {
    console.log(local1, local2)
}
ParamsLocais("RIO DE JANEIRO", "MINAS GERAIS")

let nivelGlobal = 'Nivel global';
let nivel1 = undefined; nivel2 = undefined; nivel3 = undefined;

function funcaoNivel1(){
    let nivel1 = 'Nivel1'
}

    function funcaoNivel2(){
        let nivel2 = 'Nivel2'

        function  funcaoNivel3() {
            let  nivel3 = 'Nivel3'
            console.log(`Função nivel 3 resultados: ${nivelGlobal}, ${nivel1}, ${nivel2}, ${nivel3}`)
        }
        funcaoNivel3()

        console.log(`Função nivel 2 resultados: ${nivelGlobal}, ${nivel1}, ${nivel2}, ${nivel3}`)

    }
    funcaoNivel2()

    console.log(`Função nivel 1 resultados: ${nivelGlobal}, ${nivel1}, ${nivel2}, ${nivel3}`)

funcaoNivel1()