//length: The string length method returns the number of characters in a string included empty space.
let firstName = 'gloria'//6
console.log(firstName.length)
let secondName = 'pki ach'//7
console.log(secondName.length)


/*Accessing characters in a string: We can access each character in a string using its index. 
In programming, counting starts from 0. The first index of the string is zero,
 and the last index is the length of the string minus one.*/
 let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//toUpperCase(): this method changes the string to uppercase letters.
let name = 'ken'
console.log(name.toUpperCase())     // KEN

//toLowerCase(): this method changes the string to lowercase letters.
console.log(string.toLowerCase())     // javascript

//substr(): It takes two arguments, the starting index and number of characters to slice
let country = 'Finland'
console.log(country.substr(3, 4))   // land

/*substring(): It takes two arguments, the starting index and the stopping index but it doesn't
include the character at the stopping index.*/
console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land


//split(): The split method splits a string at a specified place.
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string


//includes(): It takes a substring argument and it checks if substring argument exists in the string. 
//includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false

//replace(): takes as a parameter the old substring and a new substring.
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

//
