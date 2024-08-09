let area = document.querySelector('#area')
area.addEventListener("cliker",clicar)
area.addEventListener("mouserenter",entrar)
area.addEventListener("mouseout",sair)
 function clicar(){
    area.innerHTML='clicou'
 }
 function entrar(){
    area.innerHTML='entrar'

 }
 function sair(){
    area.innerHTML='sair'
 }