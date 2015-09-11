/* eslint-disable */
//Syntactical difference

//ES5
var sum = function (a, b) {
    return a + b;
};

//ES6
var sum = (a, b) => a + b;
// --SNIP--

export default { sum: sum() };
