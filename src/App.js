import React, {useState} from 'react';
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
    setMealEntries([meal, ...mealEntries]);
  };

  const handleAddTraining = (training) => {
    setTrainingEntries([training, ...trainingEntries]);
  };

  return (
    <div className="container">
      <h1>Calorie Counter</h1>

      <section>
        <h2>Meals</h2>
        <MealForm onAddMeal={handleAddMeal} />
        <MealList entries={mealEntries}/>
      </section>

      <section>
        <h2>Training</h2>
        <TrainingForm onAddTraining={handleAddTraining} />
        <TrainingList entries={trainingEntries}/>
      </section>

      <CalorieSummary mealEntries={mealEntries} trainingEntries={trainingEntries} />
    </div>
  );
}

export default App;
