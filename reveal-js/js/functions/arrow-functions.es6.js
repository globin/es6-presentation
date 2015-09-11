// ES 5:
var a = 3;
var b = 5;
var total_es5 = values.reduce(function (a, b) {
    return a + b;
}, 0);

// ES6
//var total_es6 = values.reduce((a, b) => a + b, 0);

// --SNIP--

export default (total_es5, total_es6);