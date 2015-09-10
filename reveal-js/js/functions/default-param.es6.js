function foo(a = "default") {
    return a;
}

const withoutParam = foo();
const withParam = foo("none default");
// --SNIP--

export default { withoutParam, withParam };
