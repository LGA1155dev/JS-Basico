// Aula 11.3:
//  Ireia aprender como funciona a estrutura de repetição for
// revisando conceitos basicos sobre ele

/*
    para (let num = 0; enquanto num for meno ou igual a 10; incremente um para o num)
                    ExibirNoConsole(`O número agora é ${num}`)


*/

for (let num = 0; num <= 10; num++)
   console.log(`O número agora é ${num}`)


for (let i = -10; i <=29; i++){
    console.log(i)
}

//Objetivo imprimir números pares entre 1 e 40

for (let pares = 0; pares <= 40; pares+= 2)
        console.log(pares)


//Numeros impares entre 300 e 333

for (let i = 301; i <=333; i+=2)
    console.log(i)

// OU

for (let i = 0; i <= 20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}
        

// Imprima todos os números que são divisiveis por 5 e 3 ao mesmo tempo entre 5 e 50.
for (i = 5; i <=50; i++){
    if (i % 5 == 0 && i % 3 == 0)
        console.log(i)
}


