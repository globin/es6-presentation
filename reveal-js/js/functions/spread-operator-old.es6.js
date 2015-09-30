/* eslint-disable */
function foo(arg1, arg2) {
    return { arg1, arg2 };
}

const args = [1, 2];

const result =  foo.apply(null, args);
// --SNIP--

export default result;
