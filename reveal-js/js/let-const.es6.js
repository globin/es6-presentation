/* eslint-disable */
function outer() {
    var someVar = 1;

    function inner() {
        someVar = 2;
        var someVar = 3;
    }

    inner();
    console.log(someVar);
}

outer();
// --SNIP--
