var botao = document.querySelector('#botao')
 botao.addEventListener('click' , formulario)
  function formulario(){
    var n1 = document.querySelector('#n1').value 
    var n2 = document.querySelector('#n2').value
    var text = document.querySelector('p')
    if( n1 > n2){
        text.innerHTML = n1
    }
    if(n1 < n2){ 
        text.innerHTML = n2
    }
  }