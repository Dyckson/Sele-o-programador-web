# Prova de conhecimentos de backend (Python)

1. O que é o PEP8?

``` 
É uma ferramenta de análise de código, cujo objetivo é padronizar a escrita do código
```

2. Nomeie alguns dos principais frameworks para o Python de cada área que você conhece.

```
Django para construção das models do backend. Django REST framework para a construção de APIs, 
```

3.  Qual (ou quais) das seguintes bibliotecas não vem por padrão na instalação do Python? (Battery included)
```python
import re 
import cmath
import numpy <= (Não vem)
import functools 
import sqlite 
import pandas <= (Não vem)
```

4. Explique o que o seguinte código faz.
```python
oi = '''Este é um "texto" para '{}'''.format('quem')
print(oi[::-1])

O código cria uma variável "oi" formada por uma string e imprime a mesma string começando pelo final, retornando um texto espelhado 
meuq' arap "otxet" mu é etsE
```

5. Conserte o funcionamento do seguinte trecho
```python
import functools

x = {1, 2, 3, 4, 5, 6, 7, 8}

soma_pares = functools.reduce(lambda x, y: x+y, [y for y in x if not y % 2])
print(soma_pares)
```

6. No Django o que são Models?

```
São modelos para tabelas do banco de dados, por exemplo uma tabela de pessoas (Model Pessoas) que contem dados como ocupação da pessoa, nome e endereço.
```

7. O que é um ORM?

```
É a ponte que liga a aplicação com o banco de dados sem termos que escrever na linguagem do banco, como por exemplo o SQL. Para isso podemos contar com as QuerySet que são um conjunto de ações que serão realizadas, estas ações podem ser criar, buscar, atualizar ou deletar os dados. 
```

8. Quais as diferenças e vantagens entre as "Function Based Views" e as "Class Based Views"?

```
  Ambas tem suas semelhanças, View Baseada em Função (FBV) e View Baseada em Classe (CBV) são fáceis de implementar, nas FBV podemos ver todo o fluxo de código que será executado na visualização, porém é difícil de reutilizar e entender ele em casos da view ser muito grande.  
  Nas CBV o código é mais fácil de se ler e reutilizar, os verbos HTTP podem ser tratados usando métodos separados e tarefas complexas podem ser realizadas com muito pouco código. 
```

9. Explique o que é o padrão MVC.

```
  É uma arquitetura baseada em Model, View e Controller. O model fica responsavel pela lógica da aplicação, que gerencia o comportamento dos dados através de regras de negócios, lógica e funções. 
  A View pode ser qualquer saída de representação dos dados, como uma tabela diagrama. É onde os dados solicitados do Modelo (Model) são exibidos.  
  Por ultimo temos o Controller que faz a mediação da entrada e saída, comandando a View e o Model para serem alterados de forma apropriada conforme o usuário solicitou 
```

10. Com o projeto que está nesta pasta, crie uma API que permita cadastrar livros, e outra para ver a lista de livros.
> Os campos necessários para a tabela serão: id, titulo (string), autor (string)
> Dica: Os tutoriais 1 (https://www.django-rest-framework.org/tutorial/1-serialization/) ao 3 mostram o funcionamento
> básico de como operar com a biblioteca.
