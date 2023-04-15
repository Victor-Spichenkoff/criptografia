//(ab) (1, chave) resto
var alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var resultadoDescriptografia = document.getElementById('resultado');
var botaoDecodificar = document.getElementById('decifrar');
var mensagemUsurario = document.getElementById('mensagem');
try {
    //M1 == 
    function descriptografarMensagem(mensagem) {
        var palavras = mensagem.split(' ');
        var mensagemFinal = '';
        palavras.forEach(function (palavra) {
            var traduzida = voltarPalavra(palavra);
            mensagemFinal += traduzida + ' ';
        });
        return mensagemFinal;
    }
    //recebe a palavra pura e traduz ela
    function voltarPalavra(palavra) {
        var traduzida = '';
        var /*[chave, palavraReal]*/ infos = qualChave(palavra);
        var separada = infos.palavraReal.split('');
        separada.forEach(function (letraModificada) {
            var indexModificado = alfa.indexOf(letraModificada); //l=11; +25=k(10);
            var compensar = 26;
            if (indexModificado - infos.chave < 0) {
                // console.log(letraModificada, 'neg')
                // const indexTraduzida = Number((alfa.indexOf(letraModificada)-infos.chave+1)*(-1))
                // const indexTraduzida = Number((alfa.indexOf(letraModificada)-infos.chave+4)*(-1))
                // const indexTraduzida = Number((26 - alfa.indexOf(letraModificada)+infos.chave))
                var resto = infos.chave - indexModificado;
                var indexTraduzida = 25 - resto + 1;
                // console.log('Traduzida = '+ indexTraduzida, alfa[indexTraduzida])
                traduzida += alfa[indexTraduzida];
            }
            else { //funciona
                // console.log(letraModificada, (indexModificado-infos.chave), 'pos')
                traduzida += alfa[indexModificado - infos.chave];
            }
            // traduzida += alfa[indexModificado-infos.chave-1]
            // console.log(alfa[indexModificado-infos.chave])
        });
        return traduzida.replaceAll('k', '');
    }
    // console.log(voltarPalavra('tlapmlbl'))//chave no 3°
    // retorna a chave e a palavraReal(sem identificadores)
    function qualChave(palavra) {
        if (palavra === void 0) { palavra = ''; }
        var letra1 = palavra[0];
        if (alfa.includes(letra1)) {
            var par = alfa.indexOf(letra1) % 2 == 0 ? false : true;
            // console.log(par)
            if (par) {
                var letra3 = palavra[2];
                return {
                    chave: (alfa.indexOf(letra3) + 1),
                    palavraReal: soPalavra(palavra, palavra[1])
                };
            }
            else {
                var letra2 = palavra[1];
                return {
                    chave: (alfa.indexOf(letra2) + 1),
                    palavraReal: soPalavra(palavra, palavra[2])
                };
            }
        }
    }
    //seleciona apenas a palavra, sem a chave e codigo
    function soPalavra(tudo, letraExtra) {
        var separado = tudo.split('');
        var final = '';
        final += letraExtra;
        for (var i = 3; i < separado.length; i++) {
            final += separado[i];
            // console.log(separado[i])
        }
        return final;
    }
    // console.log(soPalavra('aozla', 'o'))// z=chave
    // console.log(qualChave('aaola'))
    botaoDecodificar.onclick = function () {
        var m = /*'czola'*/ mensagemUsurario.value.toLowerCase();
        var traducao = descriptografarMensagem(m);
        resultadoDescriptografia.innerText = traducao;
    };
}
catch (e) {
    resultadoDescriptografia.innerText = 'Erro, tente novamente';
}
