'use strict'

const http = require('http');

http.get({
    hostname: 'localhost'
  , path: '/user?name=Suissa&teacher=true&age=31'
  , port: 3000
  , agent: false
}, function (response) {
  let body = '';
  console.log('STATUS: ' + response.statusCode);
  console.log('HEADERS: ' + JSON.stringify(response.headers));
  response.on('data', function (data) {
    body += data;
  });

  response.on('end', function () {
    console.log('Resposta: ', body);
  });
});
