//Função sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(3,8)
imprimirSoma(3)
imprimirSoma(1,2,3,4,5,6,7)
imprimirSoma('Pedro ','Augusto')

function soma (a ,b=0){
    return a +b
}

console.log(soma(3))
console.log(soma())
console.log(soma(2,6))
