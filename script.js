function novoLogar() {
    const usuario = document.getElementById('txtusuario').value;
    const senha = document.getElementById('txtsenha').value;

    if (usuario === "admin" && senha === "admin") {
        alert("SUCESSO");
    } else {
        alert("USUÁRIO ou SENHA INVÁLIDOS");
    }

    console.log(usuario);
    console.log(senha);
}
