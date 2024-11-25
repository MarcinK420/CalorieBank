import React, { useState } from 'react';

function MealForm({ onAddMeal, onAddFavorite }) {
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState('');
    const [category, setCategory] = useState('Śniadanie');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (meal && calories) {
            const newMeal = { meal, calories: Number(calories), category, id: Date.now() };
            onAddMeal(newMeal);
            setMeal('');
            setCalories('');
        }
    };

    const handleAddFavorite = () => {
        if (meal && calories) {
            const favoriteMeal = { meal, calories: Number(calories), category, id: Date.now() };
            onAddFavorite(favoriteMeal);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Posiłek"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Kalorie"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Śniadanie">Śniadanie</option>
                <option value="Lunch">Lunch</option>
                <option value="Obiad">Obiad</option>
                <option value="Przekąska">Przekąska</option>
                <option value="Kolacja">Kolacja</option>
            </select>
            <button type="submit">Dodaj Posiłek</button>
            <button type="button" onClick={handleAddFavorite}>Dodaj do Ulubionych</button>
        </form>
    );
}

export default MealForm;