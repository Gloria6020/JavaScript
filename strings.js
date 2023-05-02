/*Strings are texts, which are under single , double, back-tick quote. 
To declare a string, we need a variable name, assignment operator,
 a value under a single quote, double quote, or backtick quote */
 let space = ' '           // an empty space string
 let firstName = 'Gloria'
 let lastName = 'Pkiach'
 let country = 'Kenya'
 let city = 'Nairobi'
 let language = 'JavaScript'
 let job = 'teacher'
 let quote = "The saying,'Seeing is Believing' is not correct in 2020."
 let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

 //Connecting two or more strings together is called concatenation
 let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);





//Template Literals (Template Strings)
/*To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. 
To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign*/
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically