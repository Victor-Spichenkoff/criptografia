
function copiara() {
    var resultaConteudo = document.getElementById('criptografada').value

    // resultaConteudo[0].select()
    resultaConteudo.setSelectionRange(0, 99999)

    console.log(resultaConteudo.value)

    document.execCommand('copy')

    alert('Mensagem copiada')
}



function copiar() {
    let textoCopiado = document.getElementById("criptografada");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)


    document.execCommand("copy");
    window.alert("Mensagem copiada: " + textoCopiado.value);
}

