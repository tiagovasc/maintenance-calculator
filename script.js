document.getElementById("calculate").addEventListener("click", calculateMaintenance);

document.getElementById("down-arrow").addEventListener("click", fillAllCalories);

document.getElementById("cross").addEventListener("click", clearCalories);

function calculateMaintenance() {
  var totalCalories = 0;
  var totalWeightLost = 0;
  var totalCount = 0;

  for (var i = 0; i < 9; i++) {
    var weight = parseFloat(document.getElementById('weight' + i).value);
    var nextWeight = parseFloat(document.getElementById('weight' + (i + 1)).value);
    var calories = parseFloat(document.getElementById('calories' + i).value);

    if (isNaN(weight) || isNaN(nextWeight) || isNaN(calories)) continue;

    var weightLost = weight - nextWeight;

    totalWeightLost += weightLost;
    totalCalories += calories;
    totalCount += 1;
  }

  var caloriesPerWeightUnit = document.getElementById('unit').value === 'kg' ? 7700 : 3500;
  var totalDeficit = totalWeightLost * caloriesPerWeightUnit / 7; // Divide by 7 to get daily deficit
  var maintenanceCalories = (totalCalories + totalDeficit) / (totalCount > 0 ? totalCount : 1);

  document.getElementById('result').textContent = 'Maintenance Calories: ' + maintenanceCalories.toFixed(2);
}

function fillAllCalories() {
  var firstCalorieValue = document.getElementById('calories0').value;
  for (var i = 1; i < 10; i++) {
    document.getElementById('calories' + i).value = firstCalorieValue;
  }
}

function clearCalories() {
  for (var i = 0; i < 10; i++) {
    document.getElementById('calories' + i).value = "";
  }
}
