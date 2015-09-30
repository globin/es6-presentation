function foo(a = "default") {
    return a;
}

const withoutParam = foo();
const withParam = foo("no default");
// --SNIP--

export default { withoutParam, withParam };
