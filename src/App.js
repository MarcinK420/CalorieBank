import React, {useState} from 'react';
import CalorieForm from './components/CalorieForm';
import CalorieList from './components/CalorieList';
import CalorieSummary from './components/CalorieSummary';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className="container">
      <h1>Calorie Counter</h1>
      <CalorieForm onAddEntry={handleAddEntry} />
      <CalorieList entries={entries} />
      <CalorieSummary entries={entries} />
    </div>
  );
}

export default App;
