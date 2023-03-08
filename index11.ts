const __fs__ = require('fs');

const readeableStream = __fs__.createReadStream(__filename);
readeableStream.close();

readeableStream.on('close', () =>{
    console.log('this is from readeable stream event callback');
});
setImmediate(() => console.log('this is setimmediate event callback'));
setTimeout(() => {
    console.log('settimeout event callback')
}, 0);
Promise.resolve().then(() => console.log('Promise resolve event'));
process.nextTick(() => console.log('next tick callback'));
