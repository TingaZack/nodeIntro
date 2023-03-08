class DrinkMachine {
    serveDrink(size) {
        if (size == 'large') {
            console.log('serving complimentary drink');
        } else {
            console.log('no complimentary drink');
        }
    }
}
module.exports = DrinkMachine;