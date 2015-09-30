/* eslint-disable */
//ES5 scope of "this"
function add(){
    var self = this;    // <-- "hack"
    self.counter = 0;

    function plus(){
        self.counter += 1;
    }
    plus();
}

var myObject = {};

myObject.test = add;
myObject.test();
