// const bufFer= require('buffer');

// const buf =  bufFer.from('Zakhele', 'utf-8');
// console.log(buf.toJSON());

const buffer = Buffer.from('Zakhele', 'utf-8');
buffer.write('hello')
console.log(buffer.toJSON());
console.log(buffer.toString());
console.log(buffer);