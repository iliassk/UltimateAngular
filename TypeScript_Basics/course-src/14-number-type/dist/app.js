"use strict";
var pizzaCost = 10;
var pizzaToppings = 5;
function calculatePrice(cost, toppings) {
    return cost + 1.5 * toppings;
}
var cost = calculatePrice(pizzaCost, pizzaToppings);
console.log("Pizza costs: " + cost);
