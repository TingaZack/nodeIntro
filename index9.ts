// MICROTASKS AND QUEUES / TIME QUEUES

// EXPERIEMENT 4
setTimeout(() => {
  console.log("This is settimeout 1");
}, 1000);
setTimeout(() => {
  console.log("This is settimeout 2");
}, 500);
setTimeout(() => {
  console.log("This is settimeout 3");
}, 0);

// // EXPERIMENT 3.1
// setTimeout(() => {
//   console.log("This is settimeout 1");
// }, 0);
// setTimeout(() => {
//   console.log("This is settimeout 2");
//   process.nextTick(() => {
//     console.log('This is process.nextTick inside settimeout')
//   })
// }, 0);
// setTimeout(() => {
//   console.log("This is settimeout 3");
// }, 0);

// // EXPERIMENT 3
// // const start  = Date.now();
// process.nextTick(() => console.log("this is process tick 1"));
// process.nextTick(() => {
//   console.log("this is process tick 2");
//   process.nextTick(() => console.log("this is inner process tick"));
// });
// process.nextTick(() => console.log("this is process tick 3"));

// Promise.resolve().then(() => console.log("this is promise resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is promise resolve 2");
//   process.nextTick(() =>
//     console.log("this is promise resolve inner process tick")
//   );
// });
// Promise.resolve().then(() => console.log("this is promise resolve 3"));

// setTimeout(() => {
//   console.log("this is set timeout");
//   // console.log(Date.now() - start)
// });

// // EXPERIMENT 2
// Promise.resolve().then(() => console.log('This is promise resolved'));
// process.nextTick(() => console.log('this is process.nextTick'));

// // EXPRIMENT  1
// console.log('Console logging 1');
// console.log('Console logging 1.2');
// console.log('Console logging 1');
// console.log('Console logging 1.2');
// console.log('Console logging 1');
// console.log('Console logging 1.2');
// console.log('Console logging 1');
// console.log('Console logging 1.2');
// process.nextTick(() => console.log('this is process next tick'));
// console.log('Console logging 2');
// console.log('Console logging 2.1');
// console.log('Console logging 2');
// console.log('Console logging 2.1');
// console.log('Console logging 2');
// console.log('Console logging 2.1');
// console.log('Console logging 2');
// console.log('Console logging 2.1');
