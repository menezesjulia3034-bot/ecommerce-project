"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (product, quantity) {
        var exists = this.items.some(function (item) { return item.product.id === product.id; });
        if (exists) {
            this.items = this.items.map(function (item) {
                return item.product.id === product.id
                    ? __assign(__assign({}, item), { quantity: item.quantity + quantity }) : item;
            });
        }
        else {
            this.items.push({
                product: product,
                quantity: quantity
            });
        }
    };
    Cart.prototype.getTotalItems = function () {
        return this.items.reduce(function (total, item) { return total + item.quantity; }, 0);
    };
    Cart.prototype.getFinalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    return Cart;
}());
exports.Cart = Cart;
