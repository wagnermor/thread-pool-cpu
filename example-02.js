const env = require('node:process');
process.env.UV_THREADPOLL_SIZE = 2;

const { pbkdf2 } = require('crypto');
const start = Date.now();

function playCpu(threads = 1) {
  console.log(process.env);
  // console.log(env);
  for (let i = 1; i <= threads; i++) {
    pbkdf2('anjunPassword', 'anjunSalt', 100000, 512, 'sha512', (err, derivedKey) => {
      if (err) throw err;
      console.log(derivedKey.toString('hex'));
      console.log(`${i} [${new Date().getTime()}]: `, Date.now() - start);
    });
  }
}

playCpu(5);