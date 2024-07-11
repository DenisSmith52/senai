var funcionario = []
while (true) {
    var kl = prompt("1.cadastrar funcionário: \n 2.mostrar funcionário: \n 3.excluir funcionário: \n 4.sair do sistema: \nselecione uma das opções acima:")
    if (kl == 1) {
        var nome = prompt('diga seu nome completo:')
        var idade = prompt('diga sua idade:')
        var email = prompt('diga seu e-mail:')
        funcionario.push(nome)
        alert('parabéns cadastro comcluido com sucesso!')
        }
        else if (idade < 18) {
        alert(" desculpa mas você é menor de idade e não pode fazer o cadastro! ")

    }
    else if (kl == 2) {
        funcionario.forEach(function(nome) {
            alert(nome)
        })
        if(funcionario.length == 0){
            alert('nenhum funcionario encontrado!')
        }
    }
    else if (kl == 3) {
        var excluir = prompt(' diga o nome do funcionário')
        var indice_do_funcionario = funcionario.indexOf(excluir)

        if(indice_do_funcionario !== -1){
            funcionario.splice(indice_do_funcionario,1)
            alert('funcionario excluido com sucesso!')
        
    }
    }
    else if(kl == 4){
        alert('fim do programa!')
        break
    }
    }
     
    





