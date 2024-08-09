let area = document.querySelector("#area")
function clicar() {
    area.style.backgroundColor = "black"
    area.innerHTML = "você clicou"
}
function sair(){
    area.style.backgroundColor = " teal"
    area.innerHTML = "vacê saiu.."
}
 function entrar(){
    area.style.backgroundColor = "violet"
    area.innerHTML = "você entrou aqui.."
 }
 function limpar(){
    area.style.backgroundColor = "transparent"
    area.innerHTML ='clicar aqui para interagir'
 }