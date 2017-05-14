# Node.js - Aula 01 - Exercício
**user:** [delley](https://github.com/delley)
**autor:** Francisco Oliveira
**date:**

## 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Uma das principais caracteristicas no Node.js é executar processos de forma `assíncrona`. No Node.js, um processo `assíncrono` é baseado em eventos. A função é chamada junto com um parâmetro de `callback` (função de retorno), entra no ciclo do `event loop` e posteriormente é repassada ao `Thread Pool` para que o `event loop` continue o ciclo sem paralizar o sistema. Ao final do processamento, a função `callback` é chamada.

### Exemplo assíncrono

```js
var fs = require('fs');
var leituraAsync = function(arquivo){
  console.log("Fazendo leitura assíncrona");
  var inicio = new Date().getTime();
  fs.readFile(arquivo);
  var fim = new Date().getTime();
  console.log("Bloqueio assíncrono: "+(fim - inicio)+ "ms");
};
module.exports = leituraAsync;
```



O processo `síncrono` vai paralizar o sistema inteiro até ser executado. Seria como as pessoas subindo num carrossel, cada um por vez. E o carrossel tem que parar cada vez.



2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.


3. Qual a diferença entre um sistema single para um multi-thread?


4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?


5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?


6. Qual a versão do seu `node`?


7. Qual a versão do seu `npm`?
