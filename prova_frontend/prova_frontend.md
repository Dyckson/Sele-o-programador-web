# Prova de conhecimentos de frontend

1. O que é ECMAScript?

	É o nome oficial do JavaScript 
	
2. Como podemos usar Javascript no backend?
	
	Através do Node.js
	
3. Nomeie os principais frameworks javascript e sua principal utilidade.
	
	jQuery, Express.js, React, Next.js, Vue.js, nuxtjs... as frameworks contem ferramentas prontas que aceleram o processo de produção  
	
4. Quais linguagens, frameworks e bibliotecas você identifica do seguinte código?

```javascript
$(document).ready({
  var node = $('#nome')
  node.change({
    console.log(nome.val())
  })
})
```
Node.js, Javascript


5. Explique o que o seguinte código faz:

```javascript
const nodes = Array.from(document.getElementsByTagName('input'))
nodes.map(node => {node.value = 'Hello World'})
```
Array.from() cria um array do elemento com a tag 'input', que é acrescentado a variável nodes e o .map() percorre os valores desse array, e cada valor é substituído por 'Hello World'

6. Conserte o seguinte código:

```javascript
const lista = [
  {nome: 'item 1', valor: 1},
  {nome: 'item 2', valor: 2},
  {nome: 'item 3', valor: 3},
  {nome: 'item 4', valor: 4},
  {nome: 'item 5', valor: 5},
  {nome: 'item 6', valor: 6},
];
console.log(lista);
      
const pares = function (item) {
  return item.valor % 2 === 0; 
};

const impares = function (item) {
  return item.valor % 2 != 0; 
};

``` Alterne entre 'pares' e 'impares' o parâmentro do filter ```
const listaVisivel = lista.filter(pares);

console.log(listaVisivel);
```

7. Utilizando o projeto no diretório `projeto` implemente um componente SELECT que ao inicializar consulte a API
    `https://jsonplaceholder.typicode.com/users` e monte o combo com o ID do usuário como `value` e exibindo o nome
    do usuário no combo.

8. Continuando de onde a questão 7 parou, crie um botão `Ver posts` que ao ser clicado irá exibir uma tabela abaixo
    do combo com os posts publicados por aquele usuário.
> A API dos posts pode ser acessada através da URL https://jsonplaceholder.typicode.com/posts?userId=X onde no lugar do
> X você irá colocar o id do usuário selecionado no combo. Ex: https://jsonplaceholder.typicode.com/posts?userId=1

