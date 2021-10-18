const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

setTimeout(() => {
    message.style.display = "none"
}, 5000)

// function confirmar() {
//     return confirm("Tem certeza que quer deletar essa cerveja?");
//   }
//por algum motivo essa função não funcionou, mas esse mesmo comando no html funciona ¯\_(ツ)_/¯