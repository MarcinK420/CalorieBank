import React from 'react';

function MealList({entries}) {
    return (
        <ul>
        {entries.map((entry) => (
            <li key={entry.id}>
                {entry.meal}: {entry.calories} kcal
            </li>
        ))}
        </ul>
    );
}

export default MealList;