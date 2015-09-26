/* eslint-disable */
//ES6 "this" inherited from enclosing scope
function add(){
    this.counter = 0;
    var plus = () => {this.counter += 1};
    plus();
}

var myObject = {};

myObject.test = add;
myObject.test();
// --SNIP--

export default {};

