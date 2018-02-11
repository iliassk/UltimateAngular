var Coupon = (function () {
    function Coupon() {
    }
    Coupon.create = function (percentage) {
        return "PIZZA_RESTAURANT_" + percentage;
    };
    return Coupon;
}());
Coupon.allowed = ['Pepperoni', 'Blazing Inferno'];
console.log(Coupon.create(25));
