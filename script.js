const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultParagraph = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = calculateBMI(weight, height);
  resultParagraph.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});

function calculateBMI(weight, height) {
  return weight / (height ** 2);
}