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
  const [mealEntries, setMealEntries] = useState([]);
  const [trainingEntries, setTrainingEntries] = useState([]);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteTrainings, setFavoriteTrainings] = useState([]);
  const [showFavoriteMeals, setShowFavoriteMeals] = useState(false);
  const [showFavoriteTrainings, setShowFavoriteTrainings] = useState(false);

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

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem('mealEntries'));
    const storedTrainings = JSON.parse(localStorage.getItem('trainingEntries'));
    const storedFavoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals'));
    const storedFavoriteTrainings = JSON.parse(localStorage.getItem('favoriteTrainings'));

    if (storedMeals) setMealEntries(storedMeals);
    if (storedTrainings) setTrainingEntries(storedTrainings);
    if (storedFavoriteMeals) setFavoriteMeals(storedFavoriteMeals);
    if (storedFavoriteTrainings) setFavoriteTrainings(storedFavoriteTrainings);
  }, []);

  // Example for managing favorites separately
  useEffect(() => {
    const storedFavoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    const storedFavoriteTrainings = JSON.parse(localStorage.getItem('favoriteTrainings')) || [];
    setFavoriteMeals(storedFavoriteMeals);
    setFavoriteTrainings(storedFavoriteTrainings);
  }, []);

  return (
    <div className="container">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Calorie Counter</h1>

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

      <CalorieSummary
        mealEntries={mealEntries}
        trainingEntries={trainingEntries}
      />

      <button onClick={handleReset}>Reset</button>

      <div className="favorites-container">
        <div className="favorites-section">
          <button onClick={toggleFavoriteMeals}>
            {showFavoriteMeals ? 'Hide Favorite Meals' : 'Show Favorite Meals'}
          </button>
          {showFavoriteMeals && (
            <FavoriteMeals 
              favorites={favoriteMeals} 
              onUseFavorite={useFavoriteMeal} 
              onDeleteFavorite={deleteFavoriteMeal} 
            />
          )}
        </div>

        <div className="favorites-section">
          <button onClick={toggleFavoriteTrainings}>
            {showFavoriteTrainings ? 'Hide Favorite Trainings' : 'Show Favorite Trainings'}
          </button>
          {showFavoriteTrainings && (
            <FavoriteTrainings 
              favorites={favoriteTrainings} 
              onUseFavorite={useFavoriteTraining} 
              onDeleteFavorite={deleteFavoriteTraining} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
