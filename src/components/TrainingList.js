import React from "react";

function TrainingList({ entries, onDeleteTraining }) {
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
                {entries.map((entry) => (
                    <tr key={entry.id}>
                        <td>{entry.training}</td>
                        <td>{entry.calories} kcal</td>
                        <td>
                            <button onClick={() => onDeleteTraining(entry.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TrainingList;
