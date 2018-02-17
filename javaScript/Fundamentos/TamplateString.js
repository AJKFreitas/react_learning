const nome = "Pedro"
const concatenação = 'Olá ' + nome + ' !'
const template = `
    Olá  ${nome}!`
    console.log(concatenação , template)

    //expressoes
    console.log(`1 + 1 = ${1+1}`)

    const up = texto => texto.toUpperCase()
    const low = texto => texto.toLowerCase()
    console.log(`Ei ... ${low('TRANQUILO')}`)
    console.log(`Ei ... ${up('cuidado')} !`)

    const mais10 = numero => numero += 10
    const areaTriangulo =(base, altura,unid) =>` ${base * altura/2} ${unid}²` 
    const bascara = (a,b,c) => (b*b) - 4 *( a * c)
    console.log(mais10(12))

    console.log(areaTriangulo(10,5,'cm'))
    console.log(bascara(1,5,6))

    console.log(`A area do triangulo é${areaTriangulo(3,8,'cm')}`)