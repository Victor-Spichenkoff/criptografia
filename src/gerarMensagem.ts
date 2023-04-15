let mensagem = ''
const apagar:any =  document.getElementById('apagar')
const resultado:any = document.getElementById('criptografada')
const adicionar:any = document.getElementById('add')

const alfa2 = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function aleatorio(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }


// function getConfig() {
//     const palavra:any = document.getElementById('palavra').value
//     const esconderChave:any = document.getElementById('esconderChave').value
//     const numerosVazios:any = document.getElementById('numerosVazios').value
//     const chave2:any = document.getElementById('chave').value
//     // console.log(palavra, esconderChave, numerosVazios, chave2)
//     return {
//         palavra, esconderChave, numerosVazios, chave2
//     }
// }

function apagarMensagem() {
    mensagem = ''
    resultado.innerText = mensagem
    resultado.value = mensagem
    contPalavra = 0
}
// ola
// chave? l1 ou chave resto 

function alterarLetra(letra:string, chave=0) {
    const posicao = alfa2.indexOf(letra)
    if(posicao+chave > 25) {
        return  alfa2[posicao + chave-26]
    } else{
        return  alfa2[posicao + chave]
    }
    
    // if(posicao + chave + 1 === 26) {
    //     return 's' 
    // } else {
    // }
}


//escolhe uma letra aleatoria para par ou impar
function pegarLetraOnde(esconderChave:number) {
    let num:any
    if(esconderChave==2) {//impar a c
        while (true) {
            num = aleatorio(1, 26)
            if(num % 2=== 0){}
            else/*(!num % 2 === 0)*/ {
                // console.log(num,'impar')
                break
            }
        } 
    } else if (esconderChave == 3) {//par b, d
        while (true) {
            num = aleatorio(1, 26)
            if(num % 2=== 0) {
                // console.log(num, 'par')
                break
            }
        }
    } else {
        num = 'erro'
    }
    return alfa2[num-1]
}


function pegarLetraChave(chave:number) {
    return alfa2[chave-1]
}



//cria as 3 primeiras, codigo e chave + letra1
function criptografarPalavra() {
    let palavra:any = document.getElementById('palavra').value.toLowerCase()

    const esconderChave:any = document.getElementById('esconderChave').value!=2 && document.getElementById('esconderChave').value!=3 ? 2 : Number(document.
    getElementById('esconderChave').value)

    const chave2:any = document.getElementById('chave').value=='' || document.getElementById('chave').value > 26 ||  document.getElementById('chave').value < 1 ? 1 : Number(document.getElementById('chave').value)

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
            // console.log(i, palavra)
        }
    }

    return palavra
}




//feito
apagar.onclick = apagarMensagem

let contPalavra = 0
adicionar.onclick = function() {
    let resultPrevio = resultado.value
    let palavra = criptografarPalavra()
    resultado.innerText = `${resultPrevio} ${palavra}`
    console.log(resultPrevio + palavra)
    resultado.value = contPalavra ? `${resultPrevio} ${palavra}` : palavra
    contPalavra++
}


// console.log(alterarLetra('w', 3))

