# Criptografia *(English version below)*
<hr>

<h2>Crie e Traduza mensagens criadas com uma lógica única</h2>
<h4>Como essa criptografia funciona:</h4>
<ul>
  <li>A base dessa lógica é a criptografia de Cesar, usando uma chave, as letras são trocadas (EX: para chave 1: o 'a' aparecerá como 'b')
  <li>A primeira letra indica onde essa chave está escondida. Para letras com posição ímpar (a, c, e, ...), a chave estará na segunda posição. Caso seja um letra par(b, d, f, ...), a chave está na terceira letra
  <li>O index dessa letra representa a chave, que mostra quanto cada letra foi modificada   
</ul>
 
 <h6>Exemplos</h6>
<code>capmb</code>
<ol>
  <li>A primeira letra é 'c', ímpar, logo a chave está na segunda posição
  <li>A chave é 'a' , que representa a chave 1
  <li>Só é necessário subtrair das letras restantes 1, ficando com a palavra 'ola'
</ol>

<code>bpamb</code>
<ol>
  <li>Nesse caso, a primeira letra é 'b', sendo par, a chave está na terceira posição
  <li>A chave é, novamente, 'a' , que representa a chave 1
  <li>Subtraindo das letras restantes 1, encontramos a palavra 'ola'
</ol>

<br><br>

<h2>Create and Decode mensages white a unique logic</h2>

