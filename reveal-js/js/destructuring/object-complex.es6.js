const some = {
    deep: [1, {
        nested: 2
    }],
    object: 3
};

const { deep: [one, { nested: two }], object: three } = some;
// --SNIP--

export default { one, two, three };
