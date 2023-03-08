// FS MODULE

const fs = require('node:fs');

console.log('First');

const fileContents = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContents);
console.log('second');

fs.readFile('./file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})
console.log('third');



fs.writeFileSync('./greet.txt','hellow world!')
fs.writeFile('./greet.txt', 'hellow worlding!!!,', {'flag': 'a'}, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file written');
    }
});
