var a = 1;

function pass () { 
    const senha = document.getElementById('senha')
    const iconeSenha = document.getElementById('iconeSenha')
    if(a == 1) {
    senha.type='password';
    iconeSenha.src ='img/senha-olho-fechado.png'
    a = 0
}
else {
    senha.type='text'
    iconeSenha.src = 'img/senha-olho-aberto.png'
    a = 1
}


}