# Node.js - Aula 04 - Exercícios
**user:** [delley](https://github.com/delley)
**autor:** Francisco Oliveira
**date:**

# Call-back

## 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
'use strict'

/*

callback (err, result)

*/

function callback (err, result) {
  if(err) throw new Error(err);
  console.log('Meu nome é ', result);
}

function sayName (name, callback) {
  if(typeof name === 'string') return callback(null, name);
  const err = 'Você precisa passar uma STRING para name';
  return callback(err, null);
}

sayName('Francisco', callback);
sayName(666, callback);
```

## 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
'use strict'

function callback (err, result) {
  if(err) throw new Error(err);
  console.log('Resultado: ', result);
}

function calcula (n1, n2, callback) {
  if(typeof n1 === 'number' && typeof n1 === 'number' ) return callback(null, n1 + n2);
  const err = 'Você precisa passar um NÚMERO';
  return callback(err, null);
}

calcula(2, 1, callback);
```

## 3. Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.

```js
'use strict'

function callback (err, result) {
  if(err) throw new Error(err);
  console.log('Resultado: ', result);
}

function media (n1, n2) {
  return (n1 + n2) / 2;
}

function calcula (n1, n2, callback) {
  if(typeof n1 === 'number' && typeof n1 === 'number' ) return callback(null, media(n1, n2));
  const err = 'Você precisa passar um NÚMERO';
  return callback(err, null);
}

calcula(2, 1, callback);
```

# writeFile

## 1. Utilizar como base o código do `fs.writeFile.cmd.js` para criar vários arquivos com nomes diferentes, porém com o mesmo conteúdo.
```js
const fs = require('fs');

const file = process.argv[2] || 'arquivo01.txt';
const data = process.argv[3] || 'Webschool é nois!';
const callback = (err) => {
  if (err) throw err;
  console.log('Salvei async!');
}
const writer = () => {
  file.split(',').forEach(f => fs.writeFile(f, data, callback));
}

writer();
console.log('Final da execução!');
```
