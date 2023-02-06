'use strict'



const calcular = document.getElementById('Calcular')



/*
function somar(){
    const numero1 = document.getElementById('numero1').value

    const numero2 = document.getElementById('numero2').value

    const formulario = document.getElementById('formulario')
    formulario.classList.add('sombraVermelha')
    

    const resultado = Number(numero1) + Number(numero2)

    document.getElementById('resultadoSoma').value = resultado

}
*/

function media() {
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const formulario = document.getElementById('formulario')

    const calculo = (Number(nota1) + Number(nota2)) / 2

    const resultadoAprovado = 'Aluno Aprovado'
    const resultadoReprovado = 'Aluno Reprovado'

    if(calculo >= 5){

        document.getElementById('situacao').value = resultadoAprovado
        formulario.classList.remove('sombraVermelha')
        formulario.classList.add('sombraVerde')

    } else {
        
        document.getElementById('situacao').value = resultadoReprovado
        formulario.classList.remove('sombraVerde')
        formulario.classList.add('sombraVermelha')
        
    }

}

calcular.addEventListener('click', media)