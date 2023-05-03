/*&&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. 
The || operator gets true either of the operand is true. 
The ! operator negates true to false and false to true */

// && ampersand operator example

const chek = 4 > 3 && 10 > 5         // true && true -> true
const chec = 4 > 3 && 10 < 5         // true && false -> false
const che = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const cherop = 4 > 3 || 10 < 5         // true  || false -> true
const chem = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let chilld = 4 > 3                     // true
let charm = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true