// Get the meal container element
const mealContainer = document.getElementById('meal-container');

// Get the input element and generate button
const mealInput = document.getElementById('meal-input');
const generateBtn = document.getElementById('generate-btn');

// Generate meals based on user input
generateBtn.addEventListener('click', () => {
  const mealTimes = mealInput.value.split(',');

  if (mealTimes.length > 0) {
    generateMeals(mealTimes);
  }
});

// Function to generate meals
function generateMeals(mealTimes) {
  // Clear existing meals
  mealContainer.innerHTML = '';

  const breakfastItems = ['Coffee', 'Tea'];
  const lunchMeals = ['Pizza', 'Salad'];
  const dinnerMeals = ['Burger', 'Pasta'];

  mealTimes.forEach((mealTime) => {
    const mealElement = document.createElement('div');
    mealElement.classList.add('meal-box');
    mealElement.classList.add(mealTime.toLowerCase());

    let meal;

    if (mealTime.toLowerCase() === 'breakfast') {
      meal = getRandomItem(breakfastItems);
    } else if (mealTime.toLowerCase() === 'lunch') {
      meal = getRandomItem(lunchMeals);
    } else if (mealTime.toLowerCase() === 'dinner') {
      meal = getRandomItem(dinnerMeals);
    }

    meal = `${meal} (${mealTime})`;

    mealElement.textContent = meal;

    mealContainer.appendChild(mealElement);
  });
}

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
