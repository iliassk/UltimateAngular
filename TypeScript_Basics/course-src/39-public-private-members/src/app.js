var Pizza = (function () {
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
console.log(pizza);
