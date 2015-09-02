/* eslint-disable */
let var1, var2;

if (true) {
    let someVar = 1;
    var1 = someVar;
}

var2 = someVar;
// --SNIP--

export default {var1, var2};
