<?php
require "database.php";

// Verifica se a placa foi enviada pelo formulário
if (isset($_GET['placa'])) {
    $placa = $_GET['placa'];

    // Consulta o banco de dados para encontrar o veículo com a placa informada
    $resultado = $conexao->query("SELECT id_veiculo FROM veiculos WHERE placa='$placa'")->fetch_assoc();
    // Se a placa existe na tabela 'veiculos'
    if ($resultado) {
        $id_veiculo = $resultado['id_veiculo'];

        // Verifica se o veículo já possui um registro de acesso
        $jacadastrado = $conexao->query("SELECT * FROM acessos WHERE id_veiculo = '$id_veiculo'");
       
        if($jacadastrado->num_rows == 0) {
            // Insere um novo registro na tabela 'acessos' usando o id do veículo
            $conexao->query("INSERT INTO acessos (id_veiculo) VALUES ('$id_veiculo')");

            // Define 'Sucesso' para indicar que o acesso foi registrado
            $saida = "Sucesso";        }
        else {
            $saida = "Nulo";
        }
    } else {
        // Define 'Nulo' para indicar que a placa não foi encontrada
        $saida = "Nulo";
    }
}


?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Controle de Acesso</title>
</head>

<body>
    <h1>Controle de Acesso de Veículos</h1>
    <h2>Informação de acesso de um veículo</h2>

    <form method="GET">
        <label for="placa">Informe a placa do veículo</label>
        <input type="text" name="placa" id="placa" required>
        <input type="submit" value="Inserir">
    </form>

    <p>
        <?php
        if (isset($_GET['placa'])) {
            echo $saida === "Sucesso" ? "Acesso Registrado com Sucesso!" : "Houve um erro ao autorizar veículo, verifique se existe ou já está autorizado!";
        }
        ?>
    </p>
</body>

</html>