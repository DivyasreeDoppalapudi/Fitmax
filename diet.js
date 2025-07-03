function addMeal() {
  const mealNameInput = document.getElementById('meal-name');
  const caloriesInput = document.getElementById('calories');
  const carbsInput = document.getElementById('carbs');
  const proteinInput = document.getElementById('protein');
  const fatsInput = document.getElementById('fats');
  const mealEntriesTable = document.getElementById('meal-entries');
  const currentCaloriesDisplay = document.getElementById('current-calories');

  const mealName = mealNameInput.value.trim();
  const calories = parseInt(caloriesInput.value);
  const carbs = parseInt(carbsInput.value);
  const protein = parseInt(proteinInput.value);
  const fats = parseInt(fatsInput.value);

  if (mealName && !isNaN(calories) && !isNaN(carbs) && !isNaN(protein) && !isNaN(fats)) {
      const newRow = mealEntriesTable.insertRow();
      const nameCell = newRow.insertCell();
      const caloriesCell = newRow.insertCell();
      const carbsCell = newRow.insertCell();
      const fatsCell = newRow.insertCell();

      nameCell.textContent = mealName;
      caloriesCell.textContent = calories;
      carbsCell.textContent = `${carbs}g`;
      fatsCell.textContent = `${fats}g`;

      // Update current calories (basic implementation - no persistent storage)
      const currentCalories = parseInt(currentCaloriesDisplay.textContent);
      currentCaloriesDisplay.textContent = currentCalories + calories;

      // Clear the form
      mealNameInput.value = '';
      caloriesInput.value = '';
      carbsInput.value = '';
      proteinInput.value = '';
      fatsInput.value = '';
  } else {
      alert('Please fill in all meal details with valid numbers.');
  }
}

function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bmiResultDiv = document.getElementById('bmi-result');

  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  if (!isNaN(heightCm) && !isNaN(weightKg) && heightCm > 0) {
      const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
      bmiResultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  } else {
      bmiResultDiv.textContent = 'Please enter valid height and weight.';
  }
}