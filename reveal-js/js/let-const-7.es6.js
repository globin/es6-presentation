/* eslint-disable */
var loopedFuncs = [];
var values = [];

for (let i = 0; i < 3; i++) {
    loopedFuncs.push(function() { values.push(i); });
}

loopedFuncs.forEach(function(func) { func(); });
// --SNIP--

export default {values};
