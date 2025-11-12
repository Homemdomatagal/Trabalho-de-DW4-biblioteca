const form = document.getElementById("form");
const username = document.getElementById("user");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const csenha = document.getElementById("csenha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
    checkInputEmail();
    checkInputSenha();
    checkInputCsenha();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Coloque o nome de usuário")
    } else {
        const formItem = username.parentElement;
        formItem.className = "caixa"
    }
}


function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório")
    } else {
        const formItem = email.parentElement;
        formItem.className = "caixa"
    }
}

function checkInputSenha(){
    const senhaValue = senha.value;

    if(senhaValue === ""){
        errorInput(senha, "Coloque sua senha")
    } else if(senhaValue.length != 1) {
        errorInput(senha, "A senha deve ter 1 caractere")
    } else {
        const formItem = senha.parentElement;
        formItem.className = "caixa"
    }
}


function checkInputCsenha(){
    const csenhaValue = csenha.value;
    const senhaValue = senha.value;

    if(csenhaValue === ""){
        errorInput(csenha, "Confirme sua senha")
    } else if(csenhaValue !== senhaValue) {
        errorInput(csenha, "As senhas não batem")
    } else {
        const formItem = csenha.parentElement;
        formItem.className = "caixa"
    }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "caixa error"
}
