// Define color options
const colors = [
    { r: 255, g: 0, b: 0 }, // Red
    { r: 0, g: 255, b: 0 }, // Green
    { r: 0, g: 0, b: 255 }, // Blue
    { r: 255, g: 255, b: 0 }, // Yellow
    { r: 149, g: 33, b: 96 }, // Pink
    { r: 0, g: 0, b: 0 } // Black
  ];
  
  // Initialize variables
  let score = 0;
  let lives = 3;
  let correctColor;
  
  // Define functions
  function generateRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function generateColorOption(color) {
    const colorOption = document.createElement('div');

    colorOption.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    colorOption.classList.add('color-option');

    //if Else Statement for colors

    colorOption.addEventListener('click', () => {
      if (color === correctColor) {
        colorOption.classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
        setTimeout(playRound, 1000);

      } else {
        colorOption.classList.add('incorrect');
        lives--;
        document.getElementById('lives').textContent = lives;
        if (lives === 0) {
          endGame();
        }
      }
    });
    return colorOption;
  }
  
  function generateColorOptions() {
    const colorOptions = document.getElementById('color-options');
    colorOptions.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const color = generateRandomColor();
      const colorOption = generateColorOption(color);
      colorOptions.appendChild(colorOption);
    }
    correctColor = generateRandomColor();
    const correctColorOption = generateColorOption(correctColor);
    colorOptions.appendChild(correctColorOption);
    document.getElementById('color-display').textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;
  }
  
  function playRound() {
    document.querySelectorAll('.color-option').forEach(option => {
      option.classList.remove('correct', 'incorrect');
    });
    generateColorOptions();
  }
  
  function startGame() {
    score = 0;
    lives = 5;
    document.getElementById('score').textContent = score;
    document.getElementById('lives').textContent = lives;
    playRound();
  }
  
  function endGame() {
    document.getElementById('color-display').textContent = `Final Score: ${score}`;
    document.getElementById('color-options').innerHTML = '';
  }
  
  // Add event listeners
  document.getElementById('try-again').addEventListener('click', startGame);
  
  // Start game
  startGame();
  