// 1. typeof guard
function add(a, b) {
    return a + b;
}
var john = {
    name: "John",
    age: 30,
    extraProperty: true,
};
var userActtions = {
    onAdd: function () { },
    onRemove: function () { },
    onMove: function () {
        return "hello";
    }
};
var arr = ["10", "20", "30"];
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // Implementing methods from the Shape interface
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var name2 = "hello";
console.log(name2.trim());
