/* eslint-disable */
let promises = [fetch(someUrl), fetch(someOtherUrl), 'string content'];

Promise.all(promises).then(function (texts) {
    texts.forEach((text) => console.log())
});
