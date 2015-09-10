/* eslint-disable */
function foo(arg1, arg2) {
    return { arg1, arg2 };
}

const args = [1, 2];

export default foo.apply(null, args);
