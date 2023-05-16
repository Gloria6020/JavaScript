var jsonString = '{"name":"John","age":"30","city":"New York"}';
var obj = JSON.parse(jsonString, function(key, value) {
  if (key === 'age') {
    return parseInt(value);  // Convert the age value to an integer
  }
  return value;  // Return the original value for other properties
});
console.log(obj.age);  // Output: 30 (as a number, not a string)


/*The JSON.parse() method can also accept a reviver function as a second parameter. 
The reviver function allows you to customize the parsing of JSON values and transform them as desired. */