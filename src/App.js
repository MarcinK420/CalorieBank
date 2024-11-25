import React, { useEffect, useState } from 'react';
import MealForm from './components/MealForm';
import MealList from './components/MealList';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import CalorieSummary from './components/CalorieSummary';
import FavoriteMeals from './components/FavoriteMeals';
import FavoriteTrainings from './components/FavoriteTrainings';
import './App.css';
import backgroundVideo from './assets/background.mp4'; // Adjust the path as needed

function App() {
  const [mealEntries, setMealEntries] = useState(() => 
    JSON.parse(localStorage.getItem('mealEntries')) || []
  );
  
  const [trainingEntries, setTrainingEntries] = useState(() => 
    JSON.parse(localStorage.getItem('trainingEntries')) || []
  );
  
  const [favoriteMeals, setFavoriteMeals] = useState(() => 
    JSON.parse(localStorage.getItem('favoriteMeals')) || []
  );
  
  const [favoriteTrainings, setFavoriteTrainings] = useState(() => 
    JSON.parse(localStorage.getItem('favoriteTrainings')) || []
  );
  const [showFavoriteMeals, setShowFavoriteMeals] = useState(false);
  const [showFavoriteTrainings, setShowFavoriteTrainings] = useState(false);

  const handleAddMeal = (meal) => {
    setMealEntries((prevEntries) => [...prevEntries, meal]);
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

  const addFavoriteMeal = (meal) => {
    const updatedFavorites = [meal, ...favoriteMeals];
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem('favoriteMeals', JSON.stringify(updatedFavorites));
  };

  const addFavoriteTraining = (training) => {
    const updatedFavorites = [training, ...favoriteTrainings];
    setFavoriteTrainings(updatedFavorites);
    localStorage.setItem('favoriteTrainings', JSON.stringify(updatedFavorites));
  };

  const useFavoriteMeal = (meal) => {
    handleAddMeal(meal);
  };

  const useFavoriteTraining = (training) => {
    handleAddTraining(training);
  };

  const deleteFavoriteMeal = (id) => {
    const updatedFavorites = favoriteMeals.filter(fav => fav.id !== id);
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem('favoriteMeals', JSON.stringify(updatedFavorites));
  };

  const deleteFavoriteTraining = (id) => {
    const updatedFavorites = favoriteTrainings.filter(fav => fav.id !== id);
    setFavoriteTrainings(updatedFavorites);
    localStorage.setItem('favoriteTrainings', JSON.stringify(updatedFavorites));
  };

  const toggleFavoriteMeals = () => {
    setShowFavoriteMeals(prev => !prev);
  };

  const toggleFavoriteTrainings = () => {
    setShowFavoriteTrainings(prev => !prev);
  };

  // Single useEffect for saving updates
  useEffect(() => {
    localStorage.setItem('mealEntries', JSON.stringify(mealEntries));
    localStorage.setItem('trainingEntries', JSON.stringify(trainingEntries));
    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
    localStorage.setItem('favoriteTrainings', JSON.stringify(favoriteTrainings));
  }, [mealEntries, trainingEntries, favoriteMeals, favoriteTrainings]);

  return (
    <div className="container">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
        key="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>Fitness Tracker</h1>

      <section>
        <h2>Meals</h2>
        <MealForm onAddMeal={handleAddMeal} onAddFavorite={addFavoriteMeal} />
        <MealList entries={mealEntries} onDeleteMeal={handleDeleteMeal} />
      </section>

      <section>
        <h2>Training</h2>
        <TrainingForm onAddTraining={handleAddTraining} onAddFavorite={addFavoriteTraining} />
        <TrainingList entries={trainingEntries} onDeleteTraining={handleDeleteTraining} />
      </section>

      <CalorieSummary mealEntries={mealEntries} trainingEntries={trainingEntries} />

      <div className="favorites-container">
        <section className="favorites-section">
          <h2>Favorite Meals</h2>
          <button onClick={toggleFavoriteMeals}>
            {showFavoriteMeals ? 'Hide' : 'Show'} Favorite Meals
          </button>
          {showFavoriteMeals && (
            <FavoriteMeals
              favorites={favoriteMeals}
              onUseFavorite={useFavoriteMeal}
              onDeleteFavorite={deleteFavoriteMeal}
            />
          )}
        </section>

        <section className="favorites-section">
          <h2>Favorite Trainings</h2>
          <button onClick={toggleFavoriteTrainings}>
            {showFavoriteTrainings ? 'Hide' : 'Show'} Favorite Trainings
          </button>
          {showFavoriteTrainings && (
            <FavoriteTrainings
              favorites={favoriteTrainings}
              onUseFavorite={useFavoriteTraining}
              onDeleteFavorite={deleteFavoriteTraining}
            />
          )}
        </section>
      </div>

      <button onClick={handleReset}>Reset All Data</button>
    </div>
  );
}

export default App;
