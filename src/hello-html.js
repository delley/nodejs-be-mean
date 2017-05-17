var http = require('http')
  , fs = require('fs')
  , index = fs.readFileSync('index.html');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/html'});
  // response.write('<h1>Be MEAN</h1>');
  response.end(index);
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
