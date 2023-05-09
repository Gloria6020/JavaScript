function sayHello() {
    console.log('Hello');
  }
  
  let intervalId = setInterval(sayHello, 1000);
  
  // Stop the interval after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
  