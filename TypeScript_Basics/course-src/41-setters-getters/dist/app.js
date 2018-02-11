"use strict";
var Sizes = /** @class */ (function () {
    function Sizes(sizes) {
        this.sizes = sizes;
    }
    Object.defineProperty(Sizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return Sizes;
}());
var sizes = new Sizes(['small', 'medium']);
// invoke getter
console.log(sizes.availableSizes);
// invoke setter
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);
var Pizza = /** @class */ (function () {
    function Pizza(name) {
        this.name = name;
        this.toppings = [];
    }
    Pizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return Pizza;
}());
var pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
