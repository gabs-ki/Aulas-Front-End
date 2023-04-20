'use strict'

import './card.js'

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    console.log(produto.image)
    const card = document.createElement('card-produtos')
    card.classList.add('card')
    card.nome = produto.name
    card.price = produto.price
    card.descricao = produto.description
    card.foto = `./img/${produto.image}`
    

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()
