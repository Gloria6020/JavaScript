// Storing data in sessionStorage
sessionStorage.setItem('token', 'abcd1234');

// Retrieving data from sessionStorage
var token = sessionStorage.getItem('token');
console.log(token); // Output: abcd1234

// Removing data from sessionStorage
sessionStorage.removeItem('token');
