import React from "react";

function CalorieSummary({ entries }) {
    const totalCalories = entries.reduce((total, entry) => total + entry.calories, 0);
    return (
        <div>
            <h3>Total calories: {totalCalories} kcal</h3>
        </div>
    );
}
export default CalorieSummary;