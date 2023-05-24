// Get the number container element
const numberContainer = document.getElementById('number-container');

// Get the input elements and generate button
const startInput = document.getElementById('start-input');
const endInput = document.getElementById('end-input');
const generateBtn = document.getElementById('generate-btn');

// Generate numbers based on user input
generateBtn.addEventListener('click', () => {
  const start = parseInt(startInput.value);
  const end = parseInt(endInput.value);

  if (!isNaN(start) && !isNaN(end)) {
    generateNumbers(start, end);
  }
});

// Function to generate numbers from start to end
function generateNumbers(start, end) {
  // Clear existing numbers
  numberContainer.innerHTML = '';

  for (let i = start; i <= end; i++) {
    const numberElement = document.createElement('div');
    numberElement.textContent = i;
    numberElement.classList.add('number-box');

    if (isEven(i)) {
      numberElement.classList.add('even');
    }

    if (isOdd(i)) {
      numberElement.classList.add('odd');
    }

    if (isPrime(i)) {
      numberElement.classList.add('prime');
    }

    numberContainer.appendChild(numberElement);
  }
}

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
