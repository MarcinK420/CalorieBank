import React from "react";

function CalorieSummary({ mealEntries, trainingEntries }) {
    const totalMealCalories = mealEntries.reduce((total, entry) => total + entry.calories, 0);
    const totalTrainingCalories = trainingEntries.reduce((total, entry) => total + entry.calories, 0);

    const netCalories = totalMealCalories - totalTrainingCalories;

    return (
        <div>
            <h3>Calorie Summary</h3>
            <p>Total Calories Consumed (Meals): {totalMealCalories} kcal</p>
            <p>Total Calories Burned (Training): {totalTrainingCalories} kcal</p>
            <p>Net Calories: {netCalories} kcal</p>
        </div>
    );
}

export default CalorieSummary;