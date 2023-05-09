/*Iterate an array elements and modify the array elements. It takes a callback function with elements, index , 
array parameter and return a new array. */
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)