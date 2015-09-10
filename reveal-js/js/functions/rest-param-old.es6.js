/* eslint-disable */
function foo(arg1) {
    var rest = Array.slice(arguments, 1);
    return { arg1, rest };
}

export default foo(1, 2, 3, 4);
