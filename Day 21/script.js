// Get the year element
const yearElement = document.getElementById('year');

// Change the year color every 1 second
setInterval(() => {
  const randomColor = getRandomColor();
  yearElement.style.color = randomColor;
}, 1000);

// Get the date-time element
const dateTimeElement = document.getElementById('date-time');

// Change the date-time background color every 1 second
setInterval(() => {
  const randomColor = getRandomColor();
  dateTimeElement.style.backgroundColor = randomColor;
}, 1000);

// Get the challenge list
const challengeList = document.getElementById('challenge-list');

// Apply styles to each challenge item
const challengeItems = challengeList.getElementsByClassName('challenge');
for (let i = 0; i < challengeItems.length; i++) {
  const challengeItem = challengeItems[i];
  if (challengeItem.classList.contains('completed')) {
    challengeItem.style.backgroundColor = 'green';
  } else if (challengeItem.classList.contains('ongoing')) {
    challengeItem.style.backgroundColor = 'yellow';
  } else if (challengeItem.classList.contains('coming')) {
    challengeItem.style.backgroundColor = 'red';
  }
}

// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
