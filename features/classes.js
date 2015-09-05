/**
 * Created by Jan on 03.09.2015.
 */

/*CLASSES + SUBCLASSING
*
* Problem with example:
*
* Create class circle with:
*       - draw circle
*       - number of circles
*       - radius of a circle
*       - area of a circle
*
* Current approach:
*   1) create constructor as a function
*   2) add properties to the function
*   3) replace prototype property of constructor as an object
*   4)
*
* Object.defineProperty(obj, prop, descriptor)
*  - used to DEFINE/override property of an object
*  - key = name of the property
*
* */

// constructor
function Circle(radius) {
    this.radius = radius;
    Circle.circlesMade++;
}

// add property (as a function)
Circle.draw = function draw(circle, canvas) { /* Canvas drawing code */ }

//add another property (numeric value)
Object.defineProperty(Circle, "circlesMade", {
    get: function() {
        return !this._count ? 0 : this._count;
    },

    set: function(val) {
        this._count = val;
    }
});

//add property "area" to prototype (why not Circle.area = function area(){...} ?? Like with function draw)
Circle.prototype = {
    area: function area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};

//(??) difference between defineProperty(Circle) and defineProperty(Circle.prototype) ??
//(??) why do we need getter function, we already have radius in the constructor.
Object.defineProperty(Circle.prototype, "radius", {
    get: function() {
        return this._radius;
    },

    set: function(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    }
});


/* in ES6 - REAL CLASSES (like in Java, C++)
*  keyword static = for class properties
* */
class Circle {
    constructor(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    };

    static draw(circle, canvas) {
        // Canvas drawing code
    };

    static get circlesMade() {
        return !this._count ? 0 : this._count;
    };
    static set circlesMade(val) {
        this._count = val;
    };

    area() {
        return Math.pow(this.radius, 2) * Math.PI;
    };

    get radius() {
        return this._radius;
    };
    set radius(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    };
}