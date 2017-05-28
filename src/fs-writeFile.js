const fs = require('fs');

const file = 'webschool.txt';
const data = 'Webschool é nois!';
const encoding = 'utf8';
const callback = (err) => {
  if (err) throw err;
  console.log('Salvei async!');
}

// Async
fs.writeFile(file, data, encoding, callback);

// Sync
fs.writeFileSync(file, data);
console.log('Salvei sync!');

console.log('Final da execução!');
