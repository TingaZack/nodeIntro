const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
  orderNumber = 0;
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, topping, notes) {
    this.orderNumber++;
    this.emit("order", size, topping, notes);
  }
  displayorderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}
module.exports = PizzaShop;
