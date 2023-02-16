'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class = "item" > Senai </div>'
// }

const verificacaoNota = function (nota) {
    if (nota == '') {
        alert ('Nenhum campo pode estar vazio!')
    }else if  (nota != Number(nota)) {
        alert ('A nota precisa ser um número')
    } else if (nota >= 10){
        alert ('A nota precisa ser menor que 10')
    } else {
        return nota
    }
}

const verificacaoNome = function (nome) {
    if (nome == '') {
        alert ('Nenhum campo pode estar vazio!')
    } else {
        return nome
    }
}




const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    


    novaDiv.innerHTML = `<h2 class = "aluno_nome" >${aluno.nome}</h2>
                        <span class = "aluno_nota" >${aluno.nota}</span>`
        if (Number(nota) <= 5) {
            novaDiv.classList.add('nota_vermelha')
            
        } else if (Number(nota) >= 6) {
            novaDiv.classList.add('nota_verde')
        } 


    container.appendChild(novaDiv)
}


const handleClick = () => {

    const aluno = {
        nome: verificacaoNome(prompt('Digite o nome do aluno')),
        nota: verificacaoNota(Number(prompt('Digita a nota do aluno')))
    }
    
    adicionarCard(aluno)
    
    
}





adicionar.addEventListener('click', handleClick)