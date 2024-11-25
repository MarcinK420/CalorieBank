import React, { useState } from 'react';

function MealList({ entries, onDeleteMeal }) {
    const categories = ['Śniadanie', 'Lunch', 'Obiad', 'Przekąska', 'Kolacja'];
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (category) => {
        setExpandedCategories({
            ...expandedCategories,
            [category]: !expandedCategories[category],
        });
    };

    return (
        <div>
            <div className="meal-category-buttons">
                {categories.map((category) => (
                    <button key={category} onClick={() => toggleCategory(category)}>
                        {expandedCategories[category] ? 'Ukryj' : 'Pokaż'} {category}
                    </button>
                ))}
            </div>
            {categories.map(
                (category) =>
                    expandedCategories[category] && (
                        <div key={category}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Posiłek</th>
                                        <th>Kalorie</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entries
                                        .filter((entry) => entry.category === category)
                                        .map((entry) => (
                                            <tr key={entry.id}>
                                                <td>{entry.meal}</td>
                                                <td>{entry.calories} kcal</td>
                                                <td>
                                                    <button onClick={() => onDeleteMeal(entry.id)}>Usuń</button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    )
            )}
        </div>
    );
}

export default MealList;