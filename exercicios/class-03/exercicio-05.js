'use strict'

const http = require('http');
const options = {
      hostname: 'fipeapi.appspot.com'
    , path: '/api/1/carros/marcas.json'
    };

function onRequest(request, response) {
  console.log('serve: ' + request.url);

  http.get(options, resp => {
    let data = '';
    console.log('STATUS: ' + resp.statusCode);
    console.log('HEADERS: ' + JSON.stringify(resp.headers));

    resp.on('data', chunk => data += chunk);

    resp.on('end', () => {
      console.log('Resposta: ', data);

      const json = JSON.parse(data);
      let html = '';

      for(let key in json) {
        html += '<li>Código: <b>' + json[key].id + '</b></li>';
        html += '<li>Marca: <b>' + json[key].name + '</b></li>';
        html += '<hr>';
      }

      response.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
      response.write('<html><body>');
      response.write('<h1>Be - MEAN</h1>');
      response.write('<h2>API de Consulta Tabela FIPE</h2>');
      response.write('<ul>');
      response.write(html);
      response.write('</ul>');
      response.write('</body></html>');
      response.end();
    });
  });
}

http.createServer(onRequest).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
