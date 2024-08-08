function clicar(){
    var h2 = document.querySelector('h2')
 console.log(h2)
 var novoparagrafo = document.createElement("p")
 var texto = document.createTextNode("texto criado pelo js")
 novoparagrafo.appendChild(texto)
 var body =document.querySelector('body')
 body.appendChild(novoparagrafo) 

 
}