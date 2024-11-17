import React, { useState } from 'react';

function MealForm({ onAddMeal, onAddFavorite }) {
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (meal && calories) {
            const newMeal = { meal, calories: Number(calories), id: Date.now() };
            onAddMeal(newMeal);
            setMeal('');
            setCalories('');
        }
    };

    const handleAddFavorite = () => {
        if (meal && calories) {
            const favoriteMeal = { meal, calories: Number(calories), id: Date.now() };
            onAddFavorite(favoriteMeal);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Meal"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
            />
            <button type="submit">Add Meal</button>
            <button type="button" onClick={handleAddFavorite}>Add to Favorites</button>
        </form>
    );
}

export default MealForm;