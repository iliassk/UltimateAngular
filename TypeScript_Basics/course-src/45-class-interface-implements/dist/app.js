"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sizes = (function () {
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
var Pizza = (function (_super) {
    __extends(Pizza, _super);
    function Pizza(name, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.name = name;
        _this.toppings = [];
        return _this;
    }
    Pizza.prototype.updateSizes = function (sizes) {
        this.sizes = sizes;
    };
    Pizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return Pizza;
}(Sizes));
var pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);
