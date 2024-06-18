process.env.UV_THREADPOLL_SIZE = 2
const { pbkdf2 } = require('crypto');
const start = Date.now();

pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1: ', Date.now() - start);
});
pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1: ', Date.now() - start);
});
pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2: ', Date.now() - start);
});
pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3: ', Date.now() - start);
  return `3: ${Date.now() - start}`;
});
pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4: ', Date.now() - start);
  return `4: ${Date.now() - start}`;
});
pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5: ', Date.now() - start);
  return `5: ${Date.now() - start}`;
});