function copiar() {
    const textoCopiado:any = document.getElementById("criptografada");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)


    document.execCommand("copy");
    window.alert("Mensagem copiada: " + textoCopiado.value);
}

