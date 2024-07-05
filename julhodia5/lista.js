var numeros = [1,2,999,4,5,66,77,88]
var lista = []
 numeros.forEach(function(valor){
    if(valor < 15){
      lista.push(valor)
    }
 });
  document.write(`tem o número ${lista} na lista.`)
 