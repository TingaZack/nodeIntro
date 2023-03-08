const pizzaShop = require("./pizza-shop.ts");
const drinkMachine = require("./drink-machine.ts");

const Pizzashop = new pizzaShop();
const dMachine = new drinkMachine();

Pizzashop.on("order", (size, topping, notes) => {
  console.log(
    `Order Received! Making a ${size} Pizza with ${topping}. ${notes}`
  );
  console.log(dMachine.serveDrink(size))
});

Pizzashop.order('large', 'musrooms', 'No onions');
Pizzashop.displayorderNumber();
// pizzahop.

// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("order-pizza", (size, topping, notes) => {
//     console.log(`Order Received! Making a ${size} Pizza with ${topping}. ${notes}`);
// });
// eventEmitter.on("order-pizza", (size) => {
//     if (size == 'large') {
//         console.log('Serving complimentary drinks');
//     } else {
//         console.log('No complimentary drinks available');

//     }
// })
// console.log('Do work before event starts in the system');

// let size = 'medium';
// eventEmitter.emit("order-pizza", size, 'mushrooms', 'no onion');
