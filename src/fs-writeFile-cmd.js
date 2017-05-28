const fs = require('fs');

const file = process.argv[2] || 'webschool.txt';
const data = process.argv[3] || 'Webschool é nois!';
const callback = (err) => {
  if (err) throw err;
  console.log('Salvei async!');
}

// Async
fs.writeFile(file, data, callback);

console.log('Final da execução!');
