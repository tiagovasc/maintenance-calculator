document.getElementById("downArrow").addEventListener("click", function() {
    var firstCaloriesValue = document.getElementById("calories0").value;
    for (var i = 1; i < 10; i++) {
        document.getElementById("calories" + i).value = firstCaloriesValue;
    }
});

document.getElementById("wipe").addEventListener("click", function() {
    for (var i = 0; i < 10; i++) {
        document.getElementById("calories" + i).value = "";
    }
});

document.getElementById("calculate").addEventListener("click", calculateMaintenance);

function calculateMaintenance() {
    var totalCalories = 0;
    var totalWeightLost = 0;
    for (var i = 0; i < 9; i++) {
        var weight = parseFloat(document.getElementById('weight' + i).value);
        var nextWeight = parseFloat(document.getElementById('weight' + (i + 1)).value);
        var calories = parseFloat(document.getElementById('calories' + i).value);

        if (isNaN(weight) || isNaN(nextWeight) || isNaN(calories) || weight === "" || nextWeight === "" || calories === "") continue;

        // Convert weight loss to lbs if kg is selected
        var weightLost = weight - nextWeight;
        if (document.getElementById('unit').value === 'kg') {
            weightLost *= 2.20462; // Convert kilograms to pounds
        }

        totalWeightLost += weightLost;
        totalCalories += (calories + (weightLost * 500));
    }

    var maintenanceCalories = totalCalories / (totalWeightLost > 0 ? (totalWeightLost + 1) : 1);
    document.getElementById('result').textContent = 'Maintenance Calories: ' + maintenanceCalories.toFixed(2);
}
