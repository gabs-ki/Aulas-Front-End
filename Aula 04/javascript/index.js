'use strict'


import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description
    
    const preco = document.createElement('span')
    preco.classList.add('card__price')
    preco.textContent = produto.price

    card.append(
        foto,
        titulo,
        descricao,
        preco
    )

    return card

}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()





// // while( contador < limite) {
// //     valoresFrete[contador] = valores[contador] + valorFrete
// //     contador++
// // }


// const valores = [36, 56, 34, 45, 92]

// const limite = valores.length

// // const valoresFrete = []

// // for(let contador = 0; contador < limite; contador++) {
// //     valoresFrete[contador] = valores[contador] + 2
// // }

// const adicionaFrete = (valor) => valor + 2
// const valoresFrete = valores.map ( adicionaFrete )

// // OU

// // const valoresFrete = valores.map ( valor => valor + 2 )

// console.log(valoresFrete)



// //Criação de Array
// // const nome = [
// //     2,
// //     8,
// //     0,
// //     78
// // ]


// // //Criação de Objeto
// // const aluno = {
// //     nome: 'Diego',
// //     nota: 10,
// //     aprovado: true
// // }

// // JSON
// // const ds2t = [
// //     {
// //         nome: 'Leonidas',
// //         nota: 10,
// //         aprovado: true,
// //         UC: ['PWFE, PWBE, BCD, INDMO']
// //     },
// //     {
// //         nome: 'Miguel',
// //         nota:4,
// //         aprovado:false,
// //         UC: ['PWFE, PWBE, BCD, INDMO']
// //     }
// // ]