'use strict'

export const pesquisarCepBrasilApi = async (cepPesquisar) => {
    const url = `https://brasilapi.com.br/api/cep/v1/${cepPesquisar}`
    const response = await fetch(url)
    const data = await response.json()


    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municipio: data.city,
        estado: data.state
    }
}