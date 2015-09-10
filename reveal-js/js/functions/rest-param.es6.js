function foo(arg1, ...rest) {
    return { arg1, rest };
}

export default foo(1, 2, 3, 4);
