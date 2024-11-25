import React from "react";

function CalorieList ({entries}){
    return (
        <ul>
            {entries.map((entry) => (
                <li key={entry.id}>
                    {entry.training}: {entry.calories} kcal
                </li>
            ))}
        </ul>
    );
}
export default CalorieList;
