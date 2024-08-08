// var a = document.querySelector("#a")
//  a.innerHTML = ' mudei o texto no javascript'
//   a.style.color = 'teal'


// var b = document.querySelector("#b")
//  b.innerHTML = ' texto alterado no js'
//   b.style.color = 'navy'

// var c = document.querySelector("#c")
//  c.innerHTML = 'palavra modificada'
//   c.style.color = 'turquoise'
 var h2 = document.createElement('h2')
 var novapalavra = document.createTextNode('supra')
h2.appendChild(novapalavra)

 var body = document.querySelector('body')
  body.appendChild(novapalavra)
