'use strict'

const http = require('http');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'DELETE'
      , path: '/api/pokemons/5927686a06e4ea00127cdfe9'
      };

function callback (res) {
  console.log('STATUS:' + res.statusCode);
  console.log('HEADERS:' + JSON.stringify(res.headers));

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
req.end();
