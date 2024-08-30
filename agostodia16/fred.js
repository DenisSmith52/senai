let icon = document.querySelector('.menucelular');

icon.addEventListener('click' , abritmenu)


function abritmenu(){
    
    var menuPrincipal = document.querySelector('.menu');
    menuPrincipal.classList.toggle('adicionar_Classe_Ao_clicar')
}