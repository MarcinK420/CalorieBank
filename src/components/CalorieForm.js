import React, {useState} from "react";

function CalorieForm({onAddEntry}){
    const [calories, setCalories] = useState(0);
    const [training, setTraining] = useState(0);

    const handleSumit = (e) => {
        e.preventDefault();
        if(calories && training){
        onAddEntry({calories: Number(calories), training, id: Date.now()});
        setCalories('');
        setTraining('');
        }
};

return (
    <form onSubmit={handleSumit}>
        <input type="number" placeholder="Calories" value={calories}
        onChange={(e) => setCalories(e.target.value)} required/>
        <input type="text" placeholder="Training" value={training} 
        onChange={(e) => setTraining(e.target.value)} required/>
        <button type="submit">Add Entry</button>
    </form>
);
}
export default CalorieForm;