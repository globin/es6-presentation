let var1, var2;

/* eslint-disable */
function varExample() {
    var someVar = 1;

    function inner() {
        someVar = 2;

        var someVar = 3;

        var2 = someVar;
    }
    inner();

    var1 = someVar;
}
varExample();

/* eslint-enable */
// --SNIP--

export default {var1, var2};
