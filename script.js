function calculateMaintenance() {
    var totalMaintenanceCalories = 0;
    var totalWeeksConsidered = 0;
    var previousWeight = null;

    for (var i = 0; i < 10; i++) {
        var weightInput = document.getElementById('weight' + i);
        var caloricIntakeInput = document.getElementById('calories' + i);

        if (weightInput.value && caloricIntakeInput.value) {
            var weight = parseFloat(weightInput.value);
            var caloricIntake = parseFloat(caloricIntakeInput.value);

            if (previousWeight != null) {
                var weightLoss = previousWeight - weight;
                var maintenanceCaloriesForWeek = caloricIntake + weightLoss * 500;
                totalMaintenanceCalories += maintenanceCaloriesForWeek;
                totalWeeksConsidered++;
            }

            previousWeight = weight;
        }
    }

    var maintenanceCalories = totalMaintenanceCalories / totalWeeksConsidered;

    document.getElementById('result').innerHTML = "Maintenance Calories: " + maintenanceCalories.toFixed(2);
}

function fillCalories() {
    var value = document.getElementById('calories0').value;
    for (var i = 1; i < 10; i++) {
        var caloricIntakeInput = document.getElementById('calories' + i);
        if (caloricIntakeInput) {
            caloricIntakeInput.value = value;
        }
    }
}

function clearCalories() {
    for (var i = 0; i < 10; i++) {
        var caloricIntakeInput = document.getElementById('calories' + i);
        if (caloricIntakeInput) {
            caloricIntakeInput.value = "";
        }
    }
}
