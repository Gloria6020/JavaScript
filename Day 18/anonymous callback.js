function performOperation(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      // After 2 seconds, execute the callback
      callback();
    }, 2000);
  }
  
  performOperation(function() {
    console.log("Operation complete!");
  });
  