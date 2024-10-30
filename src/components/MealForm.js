import React, {useState} from 'react';

function MealForm({onAddMeal}) {
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (meal && calories) {
            onAddMeal({meal, calories: Number(calories), id: Date.now()});
            setMeal('');
            setCalories('');
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
        </form>
    );
}

export default MealForm;