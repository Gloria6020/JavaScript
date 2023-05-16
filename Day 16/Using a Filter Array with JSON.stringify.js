var obj = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  var jsonString = JSON.stringify(obj, ['name', 'age']);
  console.log(jsonString);  // Output: {"name":"John","age":30}

  //Example using a replacer function:
  var obj = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  var jsonString = JSON.stringify(obj, function(key, value) {
    if (key !== 'name') {
      return value;  // Include all properties except "name"
    }
  });
  console.log(jsonString);  // Output: {"age":30,"city":"New York"}
  