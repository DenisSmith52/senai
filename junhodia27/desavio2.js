var k = 0
var soma =0
 

 for(k; k <= 10 ;  k = k +1 ){
    document.write(k + '<br>')
    if(k % 2 == 0 ){
        soma = soma + k
    }
}
document.write(soma)