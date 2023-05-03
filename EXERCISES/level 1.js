let challenge = '30 Days Of JavaScript';

// Print the string on the console
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all the characters to capital letters
console.log(challenge.toUpperCase());

// Change all the characters to lowercase letters
console.log(challenge.toLowerCase());

// Cut out the first word of the string using substr() or substring()
console.log(challenge.substring(3));
console.log(challenge.substr(3));
// Slice out the phrase 'Days Of JavaScript' from '30 Days Of JavaScript'
console.log(challenge.slice(3));

// Check if the string contains the word 'Script'
console.log(challenge.includes('Script'));

// Split the string into an array
console.log(challenge.split());

// Split the string '30 Days Of JavaScript' at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Change '30 Days Of JavaScript' to '30 Days Of Python' using replace() method
console.log(challenge.replace('JavaScript', 'Python'));

// Find the character at index 15 using charAt() method
console.log(challenge.charAt(15));

// Find the character code of 'J' using charCodeAt() method
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Find the position of the first occurrence of 'a' in '30 Days Of JavaScript' using indexOf() method
console.log(challenge.indexOf('a'));

// Find the position of the last occurrence of 'a' in '30 Days Of JavaScript' using lastIndexOf() method
console.log(challenge.lastIndexOf('a'));

// Find the position of the first occurrence of the word 'because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction' using indexOf() method
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Find the position of the last occurrence of the word 'because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction' using lastIndexOf() method
console.log(sentence.lastIndexOf('because'));

// Find the position of the first occurrence of the word 'because' in the following sentence: 'You cannot end a sentence with because because because is a conjunction' using search() method
console.log(sentence.search('because'));

// Remove any trailing whitespace at the beginning and the end of a string using trim() method
let str = ' 30 Days Of JavaScript ';
console.log(str.trim());

// Use startsWith() method with the string '30 Days Of JavaScript' and make the result true
console.log(challenge.startsWith('30'));

// Use endsWith() method with the string '30 Days Of JavaScript' and make the result true
console.log(challenge.endsWith('Script'));

// Use match() method to find all the 'a's in '30 Days Of JavaScript'
console.log(challenge.match(/a/g));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '.concat('JavaScript'));

// Use repeat() method to print '30 Days Of JavaScript' 2 times
console.log(challenge.repeat(2));
