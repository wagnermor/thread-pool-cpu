const { pbkdf2 } = require('crypto');

function playCpu(message, threads) {
  const start = Date.now();
  for (let i = 1; i <= threads; i++) {
    pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      console.log(`Thread ${i}: `, Date.now() - start);
    });
  }
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ', Date.now() - start);
  });
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ', Date.now() - start);
  });
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ', Date.now() - start);
  });
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ', Date.now() - start);
  });
  pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ', Date.now() - start);
  });
}
playCpu();