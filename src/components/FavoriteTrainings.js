import React from 'react';

function FavoriteTrainings({ favorites, onUseFavorite, onDeleteFavorite }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Training Activity</th>
                    <th>Calories Burned</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map((fav) => (
                    <tr key={fav.id}>
                        <td>{fav.training}</td>
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

export default FavoriteTrainings;
