// FS PROMISES MODULE
const fsP = require('fs/promises');

async function readFile() {
    try {
        const data = await fsP.readFile('file.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFile();


// console.log('first');

// fsP.readFile('file.txt', 'utf8').then((data) => {
//     console.log('File read', data);
// }).catch((err) => {
//     console.log(err);
// })

// console.log('second');