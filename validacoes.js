    (function(){
    emailjs.init('ba-o2J1IrYlKwA4Fo');
    })()
    async function validation() { 
    const input = document.getElementsByClassName('input');
    const nome = document.getElementById('nome').value;
    const nomeElement = document.getElementById('nome')
    const sobreNome = document.getElementById('sobreNome').value;
    const sobreNomeElement = document.getElementById('sobreNome')
    const email = document.getElementById('email').value;
    const emailElement = document.getElementById('email')
    const repetirEmail = document.getElementById("repetirEmail").value
    const repetirEmailElement = document.getElementById("repetirEmail")
    const senha = document.getElementById('senha').value;
    const senhaElement = document.getElementById('senha')
    const usuario = document.getElementById('usuario').value;
    const usuarioElement = document.getElementById('usuario');
    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
    })

    document.getElementById("validation").innerHTML = "";

    if (nome == "" || nome.length <3) {
        const frase = document.getElementById("validation")
        nomeElement.style.border = "3px solid red"
        nomeElement.focus()
        frase.innerHTML = " Campo Nome obrigatório minímo 3 caracteres ";
        frase.style.color="blue";
        return 
    }

    else {
        nomeElement.style.border = "3px solid green"
    } 

    document.getElementById("validation").innerHTML = "";

        if (sobreNome == "" || sobreNome.length <3) {
            sobreNomeElement.style.border = "3px solid red"
            sobreNomeElement.focus()
            const frase = document.getElementById("validation")
            frase.innerHTML = "Campo Sobrenome obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return 

        } 
        else {
            sobreNomeElement.style.border = "3px solid green"
        } 

        if (email == "" || isEmail(email)) {
            emailElement.style.border = "3px solid red"
            emailElement.focus()
            const frase = document.getElementById("validation")
            frase.innerHTML = "Campo Email obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return 

        } 
        else {
            emailElement.style.border = "3px solid green"
        } 

        function isEmail() {
        const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2.}$/)
        if(emailRegex.test(email)) {
            frase.innerHTML = "Campo Repetir Email obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return
        }
        

        else {
            repetirEmailElement.style.border = "3px solid green"
        } } isEmail()
        if (repetirEmail == "" || email.length <3) {
            repetirEmailElement.style.border = "3px solid red"
            repetirEmailElement.focus()
            const frase = document.getElementById("validation")
            frase.innerHTML = "Campo Repetir Email obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return 

        } 
        else {
            repetirEmailElement.style.border = "3px solid green"
        } 

        if ( senha == "" || senha.length <3) {
            senhaElement.style.border = "3px solid red"
            senhaElement.focus()
            const frase = document.getElementById("validation")
            frase.innerHTML = "Campo Senha obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return 

        } 
        else {
            senhaElement.style.border = "3px solid green"
        } 

        if ( usuario == "" || usuario.length <3) {
            usuarioElement.style.border = "3px solid red"
            usuarioElement.focus()
            const frase = document.getElementById("validation")
            frase.innerHTML = "Campo Usuário obrigatório minímo 3 caracteres";
            frase.style.color="blue";
            return 

        } 
        else {
            usuarioElement.style.border = "3px solid green"
        }
        await emailjs.send('service_vj3bdnk','template_b0u70rc',{
            nome: nome,
            sobrenome: sobreNome,
            email: email,
            usuario: usuario
        },'ba-o2J1IrYlKwA4Fo').catch(error => console.log(error))
        
        sobreNomeElement.value= "";
        usuarioElement.value = "";
        nomeElement.value = "";
        repetirEmailElement.value = ""
        emailElement.value = "";
        senhaElement.value = "";

        input.border = 'none'
        }
    






  

