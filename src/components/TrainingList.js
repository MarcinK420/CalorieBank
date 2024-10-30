import React from "react";

function TrainingList({ entries }) {
    return (
        <ul>
        {entries.map((entry) => (
            <li key={entry.id}>
            {entry.training}: {entry.calories} kcal burned
            </li>
        ))}
        </ul>
    );
}

export default TrainingList;
