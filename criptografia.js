//(ab) (1, chave) resto
const alfa = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const resultadoDescriptografia = document.getElementById('resultado')
const botaoDecodificar = document.getElementById('decifrar')
const mensagemUsurario = document.getElementById('mensagem')

try {

//M1 == 
function descriptografarMensagem(mensagem) {
    const palavras = mensagem.split(' ')
    let mensagemFinal = ''
    palavras.forEach(palavra => {
        const traduzida = voltarPalavra(palavra)
        mensagemFinal += traduzida+' '
    })

    return mensagemFinal
}


//recebe a palavra pura e traduz ela
function voltarPalavra(palavra, chave) {
    let traduzida = ''
    const /*[chave, palavraReal]*/infos = qualChave(palavra)
    // console.log(infos.palavraReal, infos.chave)
    let separada = infos.palavraReal.split('')

    separada.forEach(letraModificada => {

        let indexModificado = alfa.indexOf(letraModificada)//l=11; +25=k(10);
        let compensar = 26
        
        if(indexModificado-infos.chave<0) {
            // console.log(letraModificada, 'neg')

            // const indexTraduzida = Number((alfa.indexOf(letraModificada)-infos.chave+1)*(-1))
            // const indexTraduzida = Number((alfa.indexOf(letraModificada)-infos.chave+4)*(-1))
            // const indexTraduzida = Number((26 - alfa.indexOf(letraModificada)+infos.chave))


            const resto = infos.chave - indexModificado
            const indexTraduzida = 25 - resto + 1


            // console.log('Traduzida = '+ indexTraduzida, alfa[indexTraduzida])
            traduzida += alfa[indexTraduzida]
        } else {//funciona
            // console.log(letraModificada, (indexModificado-infos.chave), 'pos')
            traduzida += alfa[indexModificado-infos.chave]
        }


        // traduzida += alfa[indexModificado-infos.chave-1]
        // console.log(alfa[indexModificado-infos.chave])
    })
    return traduzida.replaceAll('k', '')
}

// console.log(voltarPalavra('tlapmlbl'))//chave no 3°




// retorna a chave e a palavraReal(sem identificadores)
function qualChave(palavra='') {
    const letra1 = palavra[0]
    if (alfa.includes(letra1)) {
        const par = alfa.indexOf(letra1) % 2 == 0 ? false : true
        // console.log(par)
        if(par) {
            const letra3 = palavra[2]
            return {
                chave: (alfa.indexOf(letra3)+1),
                palavraReal: soPalavra(palavra, palavra[1])
            }
        } else {
            const letra2 = palavra[1]
            return {
                chave: (alfa.indexOf(letra2)+1),
                palavraReal: soPalavra(palavra, palavra[2])
            }
        }

    } else {
        return 'erro'
    }
}


//seleciona apenas a palavra, sem a chave e codigo
function soPalavra(tudo, letraExtra){
    let separado = tudo.split('')
    let final = ''
    final+= letraExtra
    for(let i = 3; i<separado.length; i++) {
        final += separado[i]
        // console.log(separado[i])
    }
    return final
}
// console.log(soPalavra('aozla', 'o'))// z=chave
// console.log(qualChave('aaola'))



botaoDecodificar.onclick = function() {
    const m = /*'czola'*/ mensagemUsurario.value.toLowerCase()
    const traducao = descriptografarMensagem(m)
    resultadoDescriptografia.innerText = traducao
}
}
catch(e){
    resultadoDescriptografia.innerText = 'Erro, tente novamente'
}