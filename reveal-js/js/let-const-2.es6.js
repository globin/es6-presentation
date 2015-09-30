/* eslint-disable */
function outer() {
    let someVar = 1;

    function inner() {
        someVar = 2;
        let someVar = 3;
    }

    inner();
    console.log(someVar);
}

outer();
// --SNIP--
