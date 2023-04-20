'use strict'

//shadowDOM

//esqueleto do elemento que vamos criar
class card extends HTMLElement {
    constructor() {

        //Usar a nossa criação da classe, e não a criação do elemento mãe
        super()

        //permite que o itens sejam alterados em tempo real e não na construção dele
         this.shadow = this.attachShadow({mode:'open'})
         this.nome = "Nome do Produto"
         this.foto = null
         this.price = "R$0,0"
         this.cor = 'white'
         this.descricao = "Descricao do Produto"

        // //Criando elemento
        // const titulo = document.createElement('div')
        // titulo.textContent = "Senai - Jandira"
        
        // const css = document.createElement('style')
        // css.textContent = `
        //     div{
        //         display: grid;
        //         place-items: center;
        //         width: 400px;
        //         height: 400px;
        //         background-color: black;
        //         color: white;
        //     }
    
        // `

        // //Adiciona itens no elemento
        // shadow.append(
        //     titulo,
        //     css
        // )
    } 

    static get observedAttributes() {
        return['nome', 'foto', 'price', 'cor', 'descricao']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
     
        this[nameAttr] = newValue
    }

    connectedCallback(){

        this.shadow.appendChild(this.component())

        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .card {
            background-color: ${this.cor};
            width: 300px;
            height: 50vh;
            display: grid;
            border: 2px solid black;
            grid-template-rows: 20% 40% 20% 20%;
            place-items: center;
            cursor: pointer;
            transition: 0.3s linear;
        }

        .card:hover {
            background-color: #312b2b;
            width: 350px;
            height: 60vh;
            border-radius: 5%;
          
        }
    
        .card:hover img {
            border: 3px solid white;
        }

        .card:hover p {
            color: #fff;
        }

        .card:hover h1 {
            color: #fff;
        }

        .card__text {
            color: black;
            font-size: 1.5rem;
            font-weight: 600;
            transition: 0.3s linear;
        }

        .card__text__description {
            font-size: 1rem;
        }

        .card__image {
            height: 200px;
            width: 200px;
            border-radius: 50%;
            border: 2px solid black;
            background-image: url(${this.foto});
            background-size: cover;
            background-position: center;
        }

        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nomeProduto = document.createElement('h1')
        nomeProduto.classList.add('card__text')
        nomeProduto.textContent = this.nome

        const descricaoProduto = document.createElement('p')
        descricaoProduto.classList.add('card__text__description')
        descricaoProduto.textContent = this.descricao

        const imagemProduto = document.createElement('img')
        imagemProduto.classList.add('card__image')

        const preco = document.createElement('p')
        preco.classList.add('card__text')
        preco.textContent = this.price

        card.append(
            nomeProduto,
            imagemProduto,
            descricaoProduto,
            preco
        )
        
        return card
    }
}


//nome composto e não unico, e precisa 
//ter um nome que se baseia na classe
customElements.define('card-produtos', card)