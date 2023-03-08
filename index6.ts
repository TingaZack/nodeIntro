// STREAMS And PIPES
const fS = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip(); 

const readableStream = fS.createReadStream('./file.txt', {
    encoding: 'utf8',
    highWaterMark: 2,
});
readableStream.pipe(gzip).pipe(fS.WriteStream('file2.txt.gz'));

const writableStream = fS.createWriteStream('./file2.txt');
readableStream.pipe(writableStream);
// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// });

