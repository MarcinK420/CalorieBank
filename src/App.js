import React, { useEffect, useState } from 'react';
import MealForm from './components/MealForm';
import MealList from './components/MealList';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import CalorieSummary from './components/CalorieSummary';
import './App.css';

function App() {
  const [mealEntries, setMealEntries] = useState([]);
  const [trainingEntries, setTrainingEntries] = useState([]);

  const handleAddMeal = (meal) => {
    const updatedMeals = [meal, ...mealEntries];
    setMealEntries(updatedMeals);
    localStorage.setItem('mealEntries', JSON.stringify(updatedMeals));
  };

  const handleAddTraining = (training) => {
    const updatedTrainings = [training, ...trainingEntries];
    setTrainingEntries(updatedTrainings);
    localStorage.setItem('trainingEntries', JSON.stringify(updatedTrainings));
  };

  const handleDeleteMeal = (id) => {
    const updatedMeals = mealEntries.filter(entry => entry.id !== id);
    setMealEntries(updatedMeals);
    localStorage.setItem('mealEntries', JSON.stringify(updatedMeals));
  };

  const handleDeleteTraining = (id) => {
    const updatedTrainings = trainingEntries.filter(entry => entry.id !== id);
    setTrainingEntries(updatedTrainings);
    localStorage.setItem('trainingEntries', JSON.stringify(updatedTrainings));
  };

  const handleReset = () => {
    setMealEntries([]);
    setTrainingEntries([]);
    localStorage.removeItem('mealEntries');
    localStorage.removeItem('trainingEntries');
  };

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem('mealEntries'));
    const storedTrainings = JSON.parse(localStorage.getItem('trainingEntries'));
    if (storedMeals) setMealEntries(storedMeals);
    if (storedTrainings) setTrainingEntries(storedTrainings);
  }, []);

  return (
    <div className="container">
      <h1>Calorie Counter</h1>

      <section>
        <h2>Meals</h2>
        <MealForm onAddMeal={handleAddMeal} />
        <MealList entries={mealEntries} onDeleteMeal={handleDeleteMeal} />
      </section>

      <section>
        <h2>Training</h2>
        <TrainingForm onAddTraining={handleAddTraining} />
        <TrainingList entries={trainingEntries} onDeleteTraining={handleDeleteTraining} />
      </section>

      <CalorieSummary
        mealEntries={mealEntries}
        trainingEntries={trainingEntries}
      />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
