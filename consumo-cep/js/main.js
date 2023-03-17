'use strict' /* impõe regras para o código */

import { pesquisarCepPostmon } from "./postmon.js"

import { pesquisarCep } from "./viacep.js"

import { pesquisarCepBrasilApi } from "./brasilapi.js"






const preecherFormulario = async () => {

    const cepDigitado = document.getElementById('cep').value

    const cep = await pesquisarCepBrasilApi(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

document.getElementById('cep').addEventListener ('blur', preecherFormulario)  