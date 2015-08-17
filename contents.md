ES6
===

backwards compatibility

let/const
---

for-of loop
---

arrays:
for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

since es5 (no continue, break)
arr.forEach(function (val) {
    console.log(val);
});

for-in does not work with arrays
for-in loops over object properties

for-of loops over data

for (var value of arr) {
    console.log(val);
}

for-of works on NodeList, string, Map, Set
 => **Iterator**

var countIterator = {
  [Symbol.iterator]: function () {
    return this;
  },
  value = 0;
  next: function () {
    var res = {done: false, value: this.value};
    this.value++;

    return res;
  }
};

Rest and Default Parameters
---

Arrow Functions
---
// ES5
var total = values.reduce(function (a, b) {
  return a + b;
}, 0);

// ES6
var total = values.reduce((a, b) => a + b, 0);

TODO: parens for parameters and return
TODO: THIS!!!



Destructuring
---

var [first, second] = [1, 2];
console.log(first); // 1
console.log(second); // 2

var [first, [second, [third]]] = [1, [2, [3]]];
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

var [,, third] = [1, 2, 3];
console.log(third); // 3

var [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

TODO: (generator)


TODO: Object Destructuring

TODO: Destructuring in iteration over Map

TODO: multiple return values

Class + subclassing
---

Generators
---

modules
---

Babel
---

Template Strings
---

Set (+Weak)
---

Map (+Weak)
---

Symbols
---

Proxy
---
