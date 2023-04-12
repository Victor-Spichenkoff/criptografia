let mensagem = ''
const apagar =  document.getElementById('apagar')
const resultado = document.getElementById('criptografada')
const adicionar = document.getElementById('add')

const alfa2 = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


function getConfig() {
    const palavra = document.getElementById('palavra').value
    const esconderChave = document.getElementById('esconderChave').value
    const numerosVazios= document.getElementById('numerosVazios').value
    const chave2 = document.getElementById('chave').value
    console.log(palavra, esconderChave, numerosVazios, chave2)
    return {
        palavra, esconderChave, numerosVazios, chave2
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

//escolhe uma letra aleatoria para par ou impar
function pegarLetraOnde(esconderChave) {
    let num
    if(esconderChave==2) {//impar a c
        while (true) {
            num = aleatorio(0, 25)
            if(num % 2 === 0) {
                break
            }
        } 
    } else if (esconderChave == 3) {//par b, d
        while (true) {
            num = aleatorio(0, 25)
            console.log(num)
            if(!num % 2===0) {
                break
            }
        }
    } else {
        num = 'erro'
    }
    return alfa2[num]
}

function pegarLetraChave(chave) {
    return alfa2[chave-1]
}



//cria as 3 primeiras, codigo e chave + letra1
function criptografarPalavra() {
    let palavra = document.getElementById('palavra').value
    const esconderChave = document.getElementById('esconderChave').value=='' ? 2 : document.getElementById('esconderChave').value
    const chave2 = document.getElementById('chave').value=='' ? 1 : Number(document.getElementById('chave').value)


    // let [palavra, esconderChave, chave2] = getConfig()
    // let [palavra, esconderChave, chave2] = ['ola', 3, 1]//a


    const letraOnde = pegarLetraOnde(esconderChave)
    const letraChave = alfa2[chave2-1]


    //já criptografa a palavra
    let palavraCripto=''
    for (let letra of palavra) {
        palavraCripto +=alterarLetra(letra, chave2)
    }
    if(esconderChave == 2) {
        palavra = `${letraOnde}${letraChave}${palavraCripto}`
    } else {
        let separada = palavraCripto.split('')
        palavra = ''
        for(let i = 0; i<separada.length+2; i++) {
            if(i==0) {palavra += letraOnde}//onde esta a chave
            else if(i==1) {palavra+=separada[0]}//
            else if (i==2) {palavra += letraChave}
            else {palavra += separada[i-2]}
            console.log(i, palavra)
        }
    }

    return palavra
}




//feito
apagar.onclick = apagarMensagem
adicionar.onclick = function() {
    let resultPrevio = resultado.innerText
    let palavra = criptografarPalavra()
    resultado.innerText = `${resultPrevio} ${palavra}`
}


// console.log(alterarLetra('w', 3))

