'use strict'

function callback (err, result) {
  if(err) throw new Error(err);
  console.log('Resultado: ', result);
}

function media (n1, n2) {
  return (n1 + n2) / 2;
}

function calcula (n1, n2, callback) {
  if(typeof n1 === 'number' && typeof n1 === 'number' ) return callback(null, media(n1, n2));
  const err = 'Você precisa passar um NÚMERO';
  return callback(err, null);
}

calcula(2, 1, callback);
