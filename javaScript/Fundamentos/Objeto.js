const prod1 = {}
prod1.nome = 'Motorola Moto Z 2'
prod1.preco = 2500.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço, apesar de ser possivel criar -los
console.log(prod1)

console.log("Outra forma de criação de objeto")

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.99,
    obj:{
        marca: 'monkey Mia'
    }
}

console.log(prod2) // json e um formato textual que é diferente da notação literal de objeto