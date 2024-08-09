var posicao_inicial = 0 
document.addEventListener("keydown", animation)

function animation(evento){
var elemento = document.querySelector('#elemento')
var img = document.querySelector('img')
if(evento.code === "ArrowRight"){
    posicao_inicial = posicao_inicial + 9000
    elemento.style.left = posicao_inicial + "px"
img.classList.remove('invertido');  
 
}
 else if(evento.code === 'ArrowLeft'){
    posicao_inicial = posicao_inicial - 9000
    elemento.style.left = posicao_inicial + "px"
    img.classList.add('invertido')
}
else if(evento.code === 'ArrowLeft'){
    posicao_inicial =posicao_inicial + 700
    elemento.style.left = posicao_inicial + "px"
    img.classList.add('inverido')
}
 if(evento.code === 'ArrowUp'){
    posicao_inicial =posicao_inicial - 7
    elemento.style.top = posicao_inicial + "px"
    img.classList.add('inverido')
}
if(evento.code === 'ArrowDown'){
    posicao_inicial =posicao_inicial + 10
    elemento.style.top = posicao_inicial + "px"
    img.classList.add('inverido')
}
}

