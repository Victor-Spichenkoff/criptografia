let mensagem = ''
const apagar =  document.getElementById('apagar')
const resultado = document.getElementById('criptografada')

const alfa2 = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function getConfig() {
    const palavra = document.getElementById('palavra')
    const esconderChave = document.getElementById('esconderChave')
    const numerosVazios= document.getElementById('numerosVazios')

    return {
        palavra, esconderChave, numerosVazios
    }
}

function apagarMensagem() {
    mensagem = ''
    resultado.innerHTML = mensagem
}
// ola
// chave? l1 ou chave resto 

function alterarLetra(letra, chave=0) {
    const posicao = alfa2.indexOf(letra)
    
    if(posicao + chave + 1 === 26) {
        return 's' 
    } else {
        return  alfa2[posicao + chave]
    }
}




//feito
apagar.onclick = apagarMensagem

// console.log(alterarLetra('w', 3))

