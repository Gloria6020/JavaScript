var obj = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  var jsonString = JSON.stringify(obj);
  console.log(jsonString);  // Output: {"name":"John","age":30,"city":"New York"}
  
  /*To convert a JavaScript object to a JSON string, you can use the JSON.stringify() method.
   It takes an object as input and returns a JSON string representation. */