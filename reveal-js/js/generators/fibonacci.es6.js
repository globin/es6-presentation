/* eslint-disable */
function *fibonacci() {
    let last = 0,
        current = 1;

    while (true) {
        yield current;
        [last, current] = [current, last + current];
    }
}

const gen = fibonacci();
const value1 = gen.next().value;
const value2 = gen.next().value;
const value3 = gen.next().value;
const value4 = gen.next().value;
const value5 = gen.next().value;

// --SNIP--

export default { value1, value2, value3, value4, value5 };
