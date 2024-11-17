import React, { useState } from "react";

function TrainingForm({ onAddTraining, onAddFavorite }) {
    const [training, setTraining] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (training && calories) {
            const newTraining = { training, calories: Number(calories), id: Date.now() };
            onAddTraining(newTraining);
            setTraining('');
            setCalories('');
        }
    };

    const handleAddFavorite = () => {
        if (training && calories) {
            const favoriteTraining = { training, calories: Number(calories), id: Date.now() };
            onAddFavorite(favoriteTraining);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Training activity"
                value={training}
                onChange={(e) => setTraining(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Calories burned"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
            />
            <button type="submit">Add Training</button>
            <button type="button" onClick={handleAddFavorite}>Add to Favorites</button>
        </form>
    );
}

export default TrainingForm;