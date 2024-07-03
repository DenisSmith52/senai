 
var treino =['legday','braço','costas','ombro','peito'];
var achar = treino.includes('legday')
document.write(`o treino legday esta no array? ${achar}`)
treino.shift('')//remove o primeiro elemento da array
treino.pop(' ')//remove elemento final da array
treino.unshift('alongamento')//adicionar um elemento no começo
treino.splice(1,1)//remover elemento do array através do índice
document.write(treino.indexOf('braço'))
treino.push('cardio');//adicionar um elemento no final da array
document.write(treino);
