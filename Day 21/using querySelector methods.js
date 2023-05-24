//querySelector(): Returns the first element that matches the specified CSS selector.
// Get the first <p> element in the document
const paragraph = document.querySelector('p');

// Modify the element
paragraph.style.color = 'blue';
paragraph.textContent = 'Hello, World!';


//querySelectorAll(): Returns a static NodeList containing all elements that match the specified CSS selector.
// Get all the elements with the class 'highlight'
const elements = document.querySelectorAll('.highlight');

// Loop through the collection and modify the elements
elements.forEach((element) => {
  element.style.backgroundColor = 'yellow';
});
