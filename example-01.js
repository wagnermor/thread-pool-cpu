const { pbkdf2 } = require('crypto');

function playCpu(threads = 1) {
  const start = Date.now();
  for (let i = 1; i <= threads; i++) {
    pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      console.log(`${i} [${new Date().getTime()}]: `, Date.now() - start);
    });
  }
  // pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  //   console.log('1: ', Date.now() - start);
  // });

}
playCpu(6);