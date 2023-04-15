function copiar() {
    var textoCopiado = document.getElementById("criptografada");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.alert("Mensagem copiada: " + textoCopiado.value);
}
