import React from "react";

function FavoriteMeals({ favorites, onUseFavorite, onDeleteFavorite }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Meal</th>
                    <th>Calories</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map((fav) => (
                    <tr key={fav.id}>
                        <td>{fav.meal}</td>
                        <td>{fav.calories} kcal</td>
                        <td>
                            <button onClick={() => onUseFavorite(fav)}>Add</button>
                            <button onClick={() => onDeleteFavorite(fav.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default FavoriteMeals;