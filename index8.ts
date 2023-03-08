// THREAD POOL
const _crypto = require("crypto");
const https = require("https");

function firstExperiment() {
  process.env.UV_THREADPOOL_SIZE = "7";

  const MAX_CALLS = 7;
  const start = Date.now();
  for (let i = 0; i < MAX_CALLS; i++) {
    // console.log('Staring');

    _crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
      console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
    //   console.log('Done');
  }
  // _crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // _crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // _crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // _crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // console.log('Hash algorithm: ', Date.now() - start);
}

function secondExperiment() {

  const MAX_CALLS = 1;
  const start = Date.now();
  for (let i = 0; i < MAX_CALLS; i++) {
    console.log('Startin...');
    
    https.request(`https://www.google.com`, (res)  => {
      res.on('data', () => {      });
      res.on('end', () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
      });
    })

  }
}
// firstExperiment();
secondExperiment();
