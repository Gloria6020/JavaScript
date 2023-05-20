function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction1() {
      console.log(outerVariable + ' from innerFunction1');
    }
  
    function innerFunction2() {
      console.log(outerVariable + ' from innerFunction2');
    }
  
    function innerFunction3() {
      console.log(outerVariable + ' from innerFunction3');
    }
  
    return {
      inner1: innerFunction1,
      inner2: innerFunction2,
      inner3: innerFunction3
    };
  }
  
  var closure = outerFunction();
  closure.inner1(); // Output: Hello from innerFunction1
  closure.inner2(); // Output: Hello from innerFunction2
  closure.inner3(); // Output: Hello from innerFunction3
  