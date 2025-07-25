const buttonOpenModal = document.getElementById("openModal"); //PEGUEI O ID DO BOTÃO QUE VAI RECEBER UM EVENTO DE CLICK//

const modalWrapper = document.querySelector(".modal-wrapper"); //PEGUEI A CLASS DA DIV PARA REMOVER OU ADICIONAR ESSA CLASS//

//COLOQUEI UM EVENTO DE CLICK NO BOTÃO E DENTRO VOU REMOVER A CLASSE "INVISIBLE"//
buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove("invisible")         
}

//AQUI ADICIONO UM EVENTO E PASSAR UMA FUNÇÃO PASSANDO O EVENTO// 
document.addEventListener("keydown", function(event) {
    const isEscKey = event.key === "Escape"

    if(isEscKey) {
        modalWrapper.classList.add("invisible")
    }
})
//DENTRO DA FUNÇÃO//
//1 - GUARDO NUMA VARIAVEL A TECLA DIGITADA É A TECLA ESC
//2 - FAÇO UMA VERIFICAÇÃO SE A TECLA FOR O ESC
//3 - ADICIONO A CLASS INVISIBLE