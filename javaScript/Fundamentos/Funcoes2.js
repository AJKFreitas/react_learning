//armazenado uma função em uma variavel

const imprimeSoma = function(a,b){
    console.log(a+b)
}

imprimeSoma(2,4)

//Armazendando uma função arrow em uma variavel

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,9))

//retorno implicito
const subtracao = (a,b) => a -b
console.log(subtracao(9,5))