// Get all the <p> elements in the document
const paragraphs = document.getElementsByTagName('p');

// Loop through the collection and modify the elements
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  paragraph.style.color = 'red';
}
