
function novoLogar(){
    const usuario = document.getElementById('txtusuario').value;
    const senha = document.getElementById('txtsenha').value;
    const btnlogin = document.getElementById('btn-login')

    if(usuario =="admin" && senha =="admin"){
        alert("SUCESSO");
    } else{
        alert("USUÁRIO ou SENHA INVÁLIDOS")
    }

    
    // btnlogin.addEventListener('click',() => {
    //     // const subscription ={
    //     //     Login: usuario.value,
    //     //     password: senha.value,
    //     // }
    // })

console.log(usuario)
console.log(senha)
console.log(btnlogin)
}

