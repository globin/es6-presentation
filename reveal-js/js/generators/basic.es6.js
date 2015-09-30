function *countdown(n) {
    while (n > 0) {
        yield n;
        n -= 1;
    }
}

const result = [];
for (const value of countdown(2)) {
    result.push(value);
}

// --SNIP--

export default { result };
