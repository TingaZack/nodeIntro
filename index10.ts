// I/O POLLING AND CHECK QUEUE
const fs_ = require("fs");

// EXPERIMENT 7
setTimeout(() => {
    console.log('This is setTimeout')
}, 0);
setImmediate(() => console.log('This is setimmediate'));
// for (let i = 0; i <10000000; i++) {}

// // EXPERIEMTN 6
// setImmediate(() => console.log('setImmediate 1'))
// setImmediate(() => {
//     console.log('setImmediate 2');
//     process.nextTick(() => console.log('setImmediate inner nextTick '));
//     Promise.resolve().then(() => console.log('setImmediate inner promise '));
// })
// setImmediate(() => console.log('setImmediate 3'))


// // EXPERIMENT 5
// fs_.readFile(__dirname, () => {
//   console.log("This is read file 1");
//   setImmediate(() => console.log("This is setimmediate"));
//   process.nextTick(() => {
//     console.log("This is inner next tick 1");
//   });
//   Promise.resolve().then(() => {
//     console.log("This is inner Promise resolve 1");
//   });
// });

// process.nextTick(() => {
//   console.log("This is next tick 1");
// });
// Promise.resolve().then(() => {
//   console.log("This is Promise resolve 1");
// });

// setTimeout(() => {
//   console.log("This is settimeout 1");
// }, 0);
// for (let i = 0; i < 100000000; i++) {}

// // EXPERIMENT 4

// fs_.readFile(__dirname, () => {
//   console.log("This is read file 1");
// });

// process.nextTick(() => {
//   console.log("This is next tick 1");
// });
// Promise.resolve().then(() => {
//   console.log("This is Promise resolve 1");
// });

// setTimeout(() => {
//   console.log("This is settimeout 1");
// }, 0);
// setImmediate(() => console.log("This is setimmediate"));
// for (let i = 0; i < 100000000; i++) {}

// // EXPERIMENT 3
// fs_.readFile(__dirname, () => {
//   console.log("This is read file 1");
// });
// process.nextTick(() => {
//   console.log("This is next tick 1");
// });
// Promise.resolve().then(() => {
//   console.log("This is Promise resolve 1");
// });
// setTimeout(() => {
//   console.log("This is settimeout 1");
// }, 0);
// for (let i = 0; i < 100000000; i++) {}

// // EXPERIMENT 2
// setTimeout(() => {
//     console.log('This is setimeout 1')
// }, 0);
// fs_.readFile(__dirname, () => {
//     console.log('This is read file 1');
// });

// // EXPERIMENT 1
// fs_.readFile(__dirname, () => {
//     console.log('This is read file 1');
// });

// process.nextTick(() => console.log('This is next tick 1'));
// Promise.resolve().then(() => console.log('This is Promise resolve 1'));
