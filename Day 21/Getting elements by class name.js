// Get all the elements with the class 'highlight'
const elements = document.getElementsByClassName('highlight');

// Loop through the collection and modify the elements
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.style.color = 'blue';
}
