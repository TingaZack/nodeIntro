const { parentPort } = require('worker_threads');

let j = 0;
for (let i = 0; i < 100000000000; i++) {
  j++;
}
parentPort.postMessage(j);