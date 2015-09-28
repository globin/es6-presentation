/**
 * Created by Jan on 26.08.2015.
 */
//SUMMARY:
/*  1) Syntactical difference
 *  2)
 *  3) be aware:
  *     - always anonymous
  *     - not newable (?)
  *     var Foo = () => {};  var f = new Foo() //TypeError
 * */


/*
* Goal of Arrow Functions:
* - Lexical this binding (?)
* - shorter syntactical form for Function expressions
*/

//SYNTACTICAL DIFFERENCES -------------------------------------------------------------
//the reduce function takes two parameters, reduce(function, 0)
// ES 5:
var total = values.reduce(function (a, b) {
    return a + b;
}, 0);

// ES6
var total = values.reduce((a, b) => a + b, 0);

/* Advantages:
 * - you can skip to write "function", "return" and braces => very practical and clean especially when you have nested function expressions *
 * in General: () => {} vs. function () {}
 * ES5:  function (arguments) { expression }
   ES6:  arguments => {expression}
 *
 * braces {} are used if arrow functions contain statements
 * no braces needed if just an expression
 * if braces => does NOT automatically return a value (only if no braces)
 *
  * */
//---------------------------------------------------------------------------------------

// FOR ME --------------------------------------------------------------------------------
/* EXAMPLE FOR "THIS" (just for me)
* var person = {
 firstName: "Penelope",
 lastName: "Barrymore",
 fullName: function () {
 console.log(this.firstName + " " + this.lastName);
 ​// We could have also written this:​​
 console.log(person.firstName + " " + person.lastName);
 }
 }
* */

// EXAMPLE of THIS in CALLBACK function
//in ES5
var Timer = function () {
    this.seconds = 0;

    var self = this;

    setInterval(function () {
        self.seconds++;
    }, 1000);
};


//in ES6
var Timer = function () {
    this.seconds = 0;

    setInterval(() => this.seconds++, 1000);
}



// EXAMPLE FOR JS OBJECT LITERAL (comma-separated LIST of name-value pairs)
var Swapper = {
    // an array literal
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    pos: { // nested object literal
        x: 40,
        y: 300
    },
    onSwap: function() { // function
        // code here
    }
};

 //---------------------------------------------------------------------------------------


/*Arrow functions do not have their own "this" value
 * The value of "this" inside an arrow function is always inherited from the enclosing scope (method)

/*
* The common "function ()" expression ALWAYS receive a this value automatically (its a property)
* */

//ES 5 name-value pair
// you need to assign this from the addAll function to a variable self, to carry "this" into the inner method
{
addAll: function addAll(pieces) {
    var self = this;
    _.each(pieces, function (piece) {
        self.add(piece); //can't use this, because "this" will refer to the caller of each(), which in this case is the underscore _.
    });
}
}

//ES 6
// inner function is an arrow function => inherits "this" from the enclosing addAll function!
{
    addAll: function addAll(pieces) {
        _.each(pieces, piece => this.add(piece));
    }
}

