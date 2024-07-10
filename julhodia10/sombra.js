var funcionario = []
while (true) {
    var kl = prompt("1.cadastrar funcionário: \n 2.mostrar funcionário: \n 3.excluir funcionário: \n 4.sair do sistema: \nselecione uma das opções acima:")
    if (kl == 1) {
        var nome = prompt('diga seu nome completo:')
        var idade = prompt('diga sua idade:')
        var email = prompt('diga seu e-mail:')
        alert('parabéns cadastro comcluido com sucesso!')
        funcionario.push(nome)
    }
    else if (kl == 2) {
        funcionario.forEach(function (nome) {
            alert(nome)
        })
    }
    else if (kl == 3) {
        var excluir = prompt(' diga o nome do funcionário')
        var indice_do_funcionario = 1
        funcionario.forEach(function (nome, indice) {
            if (excluir == nome) {
                indice_do_funcionario == indice
            }
        })
        if (indice_do_funcionário !== 1) {
            funcionario.splice(indice_do_funcionário, 1)
            alert('funcionário excluido com sucesso!')
        }
        else {
            alert('funcionario não encontrado')

        }
    }
    else if (kl == 4) {
        alert('fim do programa')
        break
    }
}



