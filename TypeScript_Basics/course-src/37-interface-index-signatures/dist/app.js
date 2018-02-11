"use strict";
var pizza;
function createPizza(name, sizes) {
    return {
        name: name,
        sizes: sizes,
        getAvailableSizes: function () {
            return this.sizes;
        },
    };
}
pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz';
pizza.toppings = 1;
console.log(pizza['toppings']);
