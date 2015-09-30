/* eslint-disable */
var outerValue, innerValue;

function outer() {
    var someVar = 1;

    function inner() {
        someVar = 2;
        var someVar = 3;
        innerValue = someVar;
    }
    inner();

    outerValue = someVar;
}
outer();
// --SNIP--

/* eslint-enable */

export default { outerValue, innerValue };
