
var botao = document.querySelector('#botao')
botao.addEventListener('click', formulario)

function formulario(){
var nome = document.querySelector('#nome').value 
var sobrenome = document.querySelector('#sobrenome').value
var telefone = document.querySelector('#numero').value
var idade = document.querySelector('#idade').value

if(nome == "" || sobrenome == "" || telefone == "" || idade == ""){
    return false
} 

    alert('meu nome é ' + nome)
    alert('meu sobrenome é' + sobrenome)
    alert('meu telefone é' + telefone)
    

}
