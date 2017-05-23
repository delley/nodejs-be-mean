# Node.js - Aula 02 - Exercícios
**user:** [delley](https://github.com/delley)
**autor:** Francisco Oliveira
**date:**

## 1. Quais são os 4 verbos que utilizamos para o CRUD?

**Create**: Utiliza-se o `POST` quando se deseja criar um recurso.

**Retrieve**: Utiliza-se o `GET` quando existe a necessidade de obter um recurso.

**Update**: Utiliza-se o `PUT` quando existe a necessidade de atualizar um recurso existente. Em algumas situações, pode-se utilizar o `PATCH` para atualizações parciais em um recurso.

**Delete**: Utiliza-se o `DELETE` quando existe a necessidade de remover um recurso.

**Nota**: Em algumas situações pode-se utilizar o `PUT` para criar um recurso. Essa situação pode ocorrer quando o recurso que está sendo atualizado não existe, porém, fica a cargo do programador essa implementação.  

## 2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os Status Code foram inventados para padronizar os retornos do protocolo `HTTP` e são divididos em 5 categorias, conforme a seguir:

**1xx** - Informações Gerais

![](101.jpeg)

**2xx** - Sucesso

![](201.jpeg)

**3xx** - Redirecionamento

![](305.jpeg)

**4xx** - Erro no Cliente

![](404.jpeg)

**5xx** - Erro no Servidor

![](503.jpeg)


## 3. Explique o que é cada parâmetro da função recebida no `createServer`.

A função `createServer` recebe uma função com dois parâmetros:

**Request** - Objeto que encapsula os dados referentes a requisição efetuada;

**Response** - Objeto que encapsula os dados que serão retornados ao cliente.

## 4. O que é e para que serve a Querystring?

Querystring é uma parte da URL que contém um ou mais parâmetros e são passados no formato `chave=valor`.
Querystring são usadas para passar dados (parâmetros) para o servidor através do método `GET`.

## 5. Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:



## Referências

* []()
