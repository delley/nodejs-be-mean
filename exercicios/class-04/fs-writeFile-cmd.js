const fs = require('fs');

const file = process.argv[2] || 'arquivo01.txt';
const data = process.argv[3] || 'Webschool é nois!';
const callback = (err) => {
  if (err) throw err;
  console.log('Salvei async!');
}
const writer = () => {
  file.split(',').forEach(f => fs.writeFile(f, data, callback));
}

writer();
console.log('Final da execução!');
