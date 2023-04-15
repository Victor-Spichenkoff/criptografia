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

<br>

<h2>Tecnologias usadas</h2>
<p>Esse foi meu primeiro projeto com TypeScript, então decidi focar em algo que pudesse usar de bastante lógica. Por ser um porjeto menor e focado na lógica, optei por não utilizar um framework, como react. </p>

<br><br>

<h2>Create and Decode mensages white a unique logic</h2>
<h4>How this encryption works:</h4>

<ul>
  <li>The basis of this logic is Cesar cryptography, using a key, the letters are exchanged (EX: for key 1: the 'a' will appear as 'b')
  <li>The first letter indicates where this key is hidden. For letters with odd position (a, c, e, ...), the key will be in the second position. If it is an even letter (b, d, f, ...), the key is in the third letter
  <li>The index of that letter represents the key, which shows how much each letter has been modified
</ul>

<h6>Examples</h6>
<code>capmb</code>
<ol>
  <li>The first letter is 'c', odd, so the key is in the second position
  <li>The key is 'a' , which represents key 1
  <li>You only need to subtract 1 from the remaining letters, which results in the word 'ola'(hello in portuguese)
</ol>

<code>bpamb</code>
<ol>
  <li>In this case, the first letter is 'b', being even, the key is in the third position
  <li>The key is, again, 'a' , which represents key 1
  <li>Subtracting to the remaining letters 1, we find the word 'ola'
</ol>

<br>

<h2>Technologies used</h2>
<p>This was my first project with TypeScript, so I decided to focus on something that could use a lot of logic. Because it is a smaller project and focused on logic, I chose not to use a framework, such as react. </p>
