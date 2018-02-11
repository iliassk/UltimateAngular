"use strict";
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
    Sizes[Sizes["xtraSize"] = 4] = "xtraSize";
})(Sizes || (Sizes = {}));
var selectedSize = 2;
console.log(Sizes.Large, Sizes[selectedSize]);
