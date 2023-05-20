// Function that takes a callback
function greetUser(name, callback) {
    console.log("Hello, " + name + "!");
    // Execute the callback after greeting the user
    callback();
  }
  
  // Callback function
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Calling the function with a callback
  greetUser("John", sayGoodbye);
  