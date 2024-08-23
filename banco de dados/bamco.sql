/* COMANDOS PARA CRIA DATABASE(BANCO DE DADOS) */
CREATE DATABASE SENAI;
/*COMANDOS PARA CRIAR TABELA */
CREATE TABLE Alunos(
    id INT AUTO_INCRENT PRIMARY KEY;
    nome  VARCHAR(255) NOT NULL;
    email VARCHAR(255)
);


/* ALTERANDO O NOME DE UM CAMPO NO SQL NA TABELA*/
 ALTER TABLE alunos
 CHANGE nome nome_pessoal VARCHAR(255)


/*COMANDO PARA ALTERAR NOMES DE UMA TABELA*/
RENAME TABLE #NOME ATUAL DA TABELA TO #NOME NOVO PRA TABELA


/*COMANDO PARA APAGAR UM CAMPO DA TABELA*/
ALTER TABLE alunos DROP COLUMN nome_pessoal;

/* adicionando campos após tabela criada*/
ALTER TABLE Alunos ADD descriacao VARCHAR(255);




/*comando para atualizar campos de bamco de dados*/
UPDATE clientes 
SET nome = 'ciente vip'
WHERE idade > 30;



/* comando para deletar campo da tabela*/
DELETE FROM #NOME DA TABELA WHERE id = 1;

-- SELECT nome, emaiL FROM clientes WHERE idade > 22













