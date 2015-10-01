/* eslint-disable */
let promise1 = new Promise(function (resolve, reject) {
    let value = doStuffToCreateValue();
    resolve(value);
});

let promise2 = Promise.resolve(otherValue);
