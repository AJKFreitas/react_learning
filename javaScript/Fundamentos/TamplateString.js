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
    const areaTriangulo =(base, altura) => base *altura/2
    console.log(mais10(12))

    console.log(areaTriangulo(10,5))
