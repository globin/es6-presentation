/**
 * Created by Jan on 10.09.2015.
 */
/*
* - Template Strings bring string interpolation to JS
* - Syntax: with backticks ``
*
* */
var greeting = `Yo World!`;

//String substitution using "${ }" syntax
var name = "Brendan";
console.log(`Yo, ${name}!`); // "Yo, Brendan!"


//all String substituions are JS Expressions! => you can do a lot of stuff e.g:
/* - inline math
*  - functions inside a string
* */
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

function fn() { return "-I am a result. Rarr-"; }
console.log(`random text ${fn()} random end.`);
//=> random text -I am a result. Rarr- random end.

//Multiline Strings
//BEFORE in ES5
var greeting = "Yo \
World";

//OR
var greeting = "Yo " +
"World";

//in ES6
var greeting =`Hello
World. This is
crazy`;

//Any whitespace in the string, including newlines and indentation is considered as part of the string.

//Tagged Templates (transform a Template String by placing a function name before it)
SaferHTML`<p title="${title}">Hello ${you}!</p>`

//getting complex here.... probably enough to mention Tagged Templates (and not going into detail)