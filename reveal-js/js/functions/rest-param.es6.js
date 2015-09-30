function foo(arg1, ...rest) {
    return { arg1, rest };
}

const result = foo(1, 2, 3, 4);
// --SNIP--

export default result;
