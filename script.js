function novoLogar() {
    const usuario = document.getElementById('txtusuario').value;
    const senha = document.getElementById('txtsenha').value;

    if (usuario === "admin" && senha === "admin") {
        alert('bem-vindo 'usuario);
    } else {
        alert("USUÁRIO ou SENHA INVÁLIDOS");
    }

    console.log('você digitou o usuário '+ usuario);
    console.log('você digitou a senha '+ senha);
}
}
