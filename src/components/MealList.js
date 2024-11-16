import React from 'react';

function MealList({ entries, onDeleteMeal }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Meal</th>
                    <th>Calories</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry) => (
                    <tr key={entry.id}>
                        <td>{entry.meal}</td>
                        <td>{entry.calories} kcal</td>
                        <td>
                            <button onClick={() => onDeleteMeal(entry.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MealList;