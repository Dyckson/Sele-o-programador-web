# Prova de conhecimentos gerais

1. Explique os seguintes conceitos: Variáveis, Loops, Funções?

Variáveis são porções da memória do computador reservadas para o armazenamento de algum dado dos programas.

Loops ou laço de repetição é utilizado quando queremos repetir instruções várias vezes, no python nós temos o "for" e "while", podemos usar a estrutura de repetição "for" para percorrer um vetor retornando seus valores.

Funções são sequências de comandos e possuem um nome, como por exemplo a função soma() que pode ser programada para receber valores e somar todos. 

2. O que significa ser "Case Sensitive"?

Case Sensitive é a palavra designada para saber se algo é ou não afetado por caracteres maiúsculo ou minúsculo, em uma validação onde você utiliza o email, normalmente o email não é afetado por caracteres em caixa alta, já a senha sim.

3. O que é um sistema de versionamento? Cite pelo menos 2.

O controle de versão permite que vários usuários trabalhem ao mesmo tempo em um projeto de forma segura para a aplicação, sendo o SVN, GIT e CVS um dos mais conhecidos, com eles podemos reverter alterações ao ponto onde a aplicação funcionava corretamente.

4. No GIT, o que seria um COMMIT?

Commit seria um estado onde os arquivos foram capturados naquele momento do projeto, com eles podemos revisar tudo antes de enviar para o master. É recomendado fazer uma branch (ramificação) do projeto antes de commitar. 

5. No GIT, o que seria um MERGE?

MERGE seria a ação de juntar nossas branchs criadas ao diretório principal  

6. Qual a importância de se utilizar um sistema de versionamento?

Fatores como segurança, onde somente pessoas autorizadas podem editar o código. Versionamento, caso seja necessário voltar ao estado onde a aplicação funcionava, caso ela não se comporte da forma desejada. Também podendo rastrear quem fez a alteração e o que foi modificado, tornando o trabalho geral mais organizado e produtivo. 

7. Utilizando o banco de dados fornecido no arquivo `chinook.db` prepare uma consulta que mostre o nome do artista
    e a quantidade albuns que ele lançou.

	SELECT artists.Name, count(albums.Title) as quantidadeAlbums
	FROM albums
	INNER JOIN artists ON artists.ArtistId = albums.ArtistId
	WHERE artists.ArtistId = 21;

8. Prepare uma consulta que traga os 5 artistas que lançaram mais albuns e quantos albuns estes lançaram.

	SELECT artists.name, count(albums.AlbumId) as quantidadeAlbums
	FROM artists 
	INNER JOIN albums ON artists.ArtistId = albums.ArtistId
	GROUP BY artists.ArtistId
	ORDER BY quantidadeAlbums DESC
	LIMIT 5

9. Prepare uma consulta que traga os 20 clientes que mais gastaram. (Na tabela `invoices` há as compras feitas
    por cada cliente e seu valor)

	SELECT customers.FirstName, max(invoices.Total) as gastoMaximo
	FROM customers
	INNER JOIN invoices ON invoices.CustomerId = customers.CustomerId
	GROUP BY customers.CustomerId
	ORDER BY gastoMaximo DESC
	LIMIT 20

10. Prepare uma consulta que traga os seguintes dados: `CustomerId | CustomerName | total2011 | total2012 | total2013`
    Onde as colunas de totais mostram quanto aquele cliente gastou naquele determinado ano.
    
	SELECT customers.CustomerId,  customers.FirstName as nome, customers.LastName as sobreNome,invoices.InvoiceDate ,invoices.Total
	FROM customers
	INNER JOIN invoices ON invoices.CustomerId = customers.CustomerId
	GROUP BY invoices.InvoiceDate
	ORDER BY customers.CustomerId
