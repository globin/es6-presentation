function foo(a = "default", b) {
    return { a, b };
}

const result = foo();
// --SNIP--

export default result;
