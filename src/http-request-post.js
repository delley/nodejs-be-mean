'use strict'

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Francisco Oliveira'
      , type: 'aluno'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'POST'
      , path: '/api/pokemons'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback (res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados', data);
  });
};

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
