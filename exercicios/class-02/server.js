'use strict';

var date = (new Date()).toJSON();
const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , rota: 'Be MEAN'
      , returned_at: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

  http.createServer(function(request, response){

    var url = request.url;

    switch(url) {
      case '/api/create':
      case '/api/read':
      case '/api/update':
      case '/api/delete':
        SUCCESS.rota = url;
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
        response.write(JSON.stringify(SUCCESS));
        break;
      default:
        response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8'});
        response.write(JSON.stringify(ERROR));
    }
    response.end();
  }).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
  });
