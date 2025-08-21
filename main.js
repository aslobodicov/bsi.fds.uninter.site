const botao = document.getElementById("botaoMensagem"); /*const pois não modificaremos mais a nossa mensagem*/
const mensagem = document.getElementById("mensagem");

/*quando o usuário clicar no botão, invocará uma função para 'preencher' o <p> com a mensagem atraves do método textContent*/

botao.addEventListener("click", trocaTexto);

/*a função além de exibir o texto, esconde o texto ao clicar novamente*/
function trocaTexto() {
    if (mensagem.textContent == "") {
        mensagem.textContent = '"Manter as portas entreabertas pelo simples prazer do apego é abraçar a ilusão da continuidade."';
    }
    else {
        mensagem.textContent = "";
        }
}