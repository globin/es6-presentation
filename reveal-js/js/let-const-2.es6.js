/* eslint-disable */
let var1, var2;

function varExample() {
    let someVar = 1;

    function inner() {
        someVar = 2;
        let someVar = 3;
        var2 = someVar;
    }
    inner();

    var1 = someVar;
}
varExample();
// --SNIP--

export default {var1, var2};
