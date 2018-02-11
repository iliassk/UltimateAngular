"use strict";
var pizza = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName: function () {
        return this.name;
    },
};
console.log(pizza.getName());
