'use strict'

const routes = {
    '/'             :   '/pages/home.html',
    '/vermelho'     :   '/pages/vermelho.html',
    '/azul'         :   '/pages/azul.html',
    '/verde'        :   '/pages/verde.html',
    '/roxo'         :   '/pages/roxo.html'
}

const route = async () => {
    //a classe preventDefault() 
    //não permite a quebra da página(não dá mais f5 e não redireciona a página)
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()

    
    document.getElementById('root').innerHTML = html
    

}
 

window.route = route