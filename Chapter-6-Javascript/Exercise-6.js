const costInput = document.getElementById('cost');

const litersInput = document.getElementById('liters');

const calculateButton = document.getElementById('calculate');

const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    
  const cost = parseFloat(costInput.value);

  const liters = parseFloat(litersInput.value);

  const totalCost = cost * liters;

  resultParagraph.textContent = `Total cost: $${totalCost.toFixed(2)}`;
});