var resul_imc = []
var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var imc = document.getElementById('imc');
var botao_enviar = document.getElementById('botao_enviar');
 botao_enviar.addEventListener('click',calcularimc);
  function calcularimc(){
     var altura2 = Number(altura.value);
     var peso2 = Number(peso.value);
     var imc = peso2 / (altura2 * altura2);
      resul_imc.push(imc)
      alert(imc.innerHTML = "o resultado da soma é:" + resul_imc);
  }