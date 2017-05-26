# Node.js - Aula 03 - Exercícios
**user:** [delley](https://github.com/delley)
**autor:** Francisco Oliveira
**date:**

## 1. Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?

O chrome utiliza a última requisição para solicitar o arquivo favicon.icon.

## 2. Qual a DIFERENÇA entre o `GET` e o `POST`?

**GET** - As informações são enviadas como `String` e fazem parte da `URL`, dessa forma, o tamanho da URL é limitado a 1024 caracteres. Seu uso é indicado quando se quer passar poucas informações para realizar uma pesquisa ou simplismente passar informações para outra página/api através da URL. O resultado desse método é armazenado no cache do navegador, ou seja, é mantido no histórico.

**POST** - As informações são encapsuladas junto ao corpo da requisição HTTP, assim, esse método não possui limite de tamanho quanto ao comprimento da mensagem enviada. É possível enviar qualquer tipo de dado e as informações enviadas não ficam armazenadas no cache do navegador.

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu `User` do Github, colocando aqui a resposta de cada passo.

Resposta da criação do pokemon:
```
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"85","etag":"W/\"55-y2er4vbI+4gcAXShuRLA1g\"","date":"Thu, 25 May 2017 23:14:40 GMT","via":"1.1 vegur"}
Dados finalizados {"__v":0,"name":"Francisco Oliveira","type":"aluno","_id":"5927656006e4ea00127cdfe8"}
```
Resposta da modificação do pokemon:
```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"121","etag":"W/\"79-7tfN4U5zHZ3L1MPZt7Y0Aw\"","date":"Thu, 25 May 2017 23:28:18 GMT","via":"1.1 vegur"}
Dados finalizados {"data":{"ok":1,"nModified":1,"n":1,"opTime":{"ts":"6424218369741815809","t":2},"electionId":"7fffffff0000000000000002"}}
```

## 4. Depois faça o `DELETE`, criando o script para tal, colocando aqui a resposta.

Resposta do DELETE:
```
STATUS:204
HEADERS:{"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Fri, 26 May 2017 01:23:11 GMT","via":"1.1 vegur"}
Dados finalizados
```

## 5. Escolha uma API externa e crie um script para fazer um `GET` nela mostrando o resultado com HTML.
