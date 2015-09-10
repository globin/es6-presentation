/**
 * Created by Jan on 10.09.2015.
 */
//ES6
/*
* - each module is defined in its own file => functions + variables not visible to the outside
* - you can export specific code to make it accessible from the other modules
* - use export/import (import to get access to different module)
*
* src: http://www.sitepoint.com/understanding-es6-modules/
 * */

//module utility.js (two functions + export)
function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}

export { generateRandom, sum }
//export { generateRandom as random, sum as doSum}


//module app.js (import two functions from utility.js)
import { generateRandom, sum } from 'utility';
console.log(generateRandom()); //logs a random number
console.log(sum(1, 2)); //3

//OR another option of importing
/*
import 'utility' as utils;
console.log(utils.generateRandom()); //logs a random number
console.log(utils.sum(1, 2)); //3
*/


//-----FURTHER INFORMATION IN https://hacks.mozilla.org/2015/08/es6-in-depth-modules/ (VERY DETAILLED)