import React, {useState} from "react";

function TrainingForm({onAddTraining}) {
    const [training, setTraining] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (training && calories) {
            onAddTraining({training, calories: Number(calories), id: Date.now()});
            setTraining('');
            setCalories('');
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
        </form>
    );
}

export default TrainingForm;