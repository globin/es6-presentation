function *countdown(n) {
    while (n > 0) {
        yield n;
        n -= 1;
    }
}

const gen = countdown(2);
const result1 = gen.next();
const result2 = gen.next();
const result3 = gen.next();
// --SNIP--

export default { result1, result2, result3 };
