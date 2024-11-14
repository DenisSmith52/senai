<?php 
    
    try {         
        $conexao = new mysqli("localhost","root","","scav");
    }
    catch(Exception $erro) {
        echo "Houve um erro ao se conectar com o banco de dados" . $erro->getMessage();
    }

?>