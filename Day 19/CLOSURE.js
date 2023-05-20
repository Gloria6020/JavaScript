/*If inner function access the variables of outer function then it is called closure. */
function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure(); // Output: Hello
  