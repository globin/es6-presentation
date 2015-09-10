/**
 * Created by Jan on 10.09.2015.
 */
//Basic Stuff:
// - keywords: extends and super (to not shadow properties)
// - subclassing builtins

//Basic Subclassing
class Shape {
    get color() {
        return this._color;
    }
    set color(c) {
        this._color = parseColorAsRGB(c);
        this.markChanged();  // repaint the canvas later
    }
}

//Goal: Circle should inherit from Shape
// => use "extends" keyword
class Circle extends Shape {
    // As above
}

//keyword super to circumvent shadowing of methods/properties
class ScalableCircle extends Circle {
    get radius() {
        return this.scalingFactor * super.radius;
    }
}




//----------IN ES5-------------------------------------------------
//JS Inheritance with:
    var temp = {
    value: 4
    name() {return "bla";}
};

    var obj = Object.create(temp);
    obj.value; //4
    obj.name(); //"bla"
//---------------------------------------------------------------


/*
//AB HIER: ADDITIONAL INFORMATION (+ maybe not useful stuff)
//--------NOT USEFUL?!---------------------------------------------------------------
class Circle {
    // As before
}

// prototype of Circle inherits instance properties of Shape prototype
Object.setPrototypeOf(Circle.prototype, Shape.prototype);

// Circle inherits static properties of Shape
Object.setPrototypeOf(Circle, Shape);


//Problem: - very ugly, we want everything grouped together!
//----------------------------------------------------------------------------------




//Subclassing Builtins (builtin data structures like Array, ...)
class SpecialArray extends Array {
    super();
    special_prop = 3;
}

//----------ADDITIONAL STUFF------------------------
//only inherit parts of the constructor of the superclass
class Shape {
    constructor(color) {
        this._color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color); //<-----------------------
        this.radius = radius;
    }
}*/