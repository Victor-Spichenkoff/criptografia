//(ab) (1, chave) resto
const alfa = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function getChave(palavra) {
    let 
}
//M1 == 
function descriptografarMensagem(mensagem) {
    const palavras = mensagem.split(' ')
    let mensagemFinal = ''
    palavras.forEach(palavra => {
        
    })
}


//recebe a palavra pura e traduz ela
function voltarPalavra(palavra, chave) {
    let traduzida = ''
    const [chave, palavraReal] = qualChave(palavra)
    palavra.forEach(letraModificada => {
        
    })
}
voltarPalvra('aozla')


// retorna a chave e a palavraReal
function qualChave(palavra='') {
    const letra1 = palavra[0]
    if (alfa.includes(letra1)) {
        const par = alfa.indexOf(letra1) % 2 == 0 ? false : true
        console.log(par)
        if(par) {
            const letra3 = palavra[1]
            return {
                chave: (alfa.indexOf(letra3)+1),
                palavraReal: soPalavra(palavra, palavra[2])
            }
        } else {
            const letra2 = palavra[2]
            return {
                chave: (alfa.indexOf(letra2)+1),
                palavraReal: soPalavra(palavra, palavra[1])
            }
        }

    } else {
        return 'erro'
    }
}
// console.log(qualChave('bzola'))


//seleciona apenas a palavra, sem a chave e codigo
function soPalavra(tudo, letraExtra){
    let separado = tudo.split('')
    let final = ''
    final+= letraExtra
    for(let i = 3; i<separado.length; i++) {
        final += separado[i]
        console.log(separado[i])
    }
    return final
}
// console.log(soPalavra('aozla', 'o'))// z=chave
// console.log(qualChave('aaola'))