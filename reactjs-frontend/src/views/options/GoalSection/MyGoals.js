// // material-ui
// import { Typography } from '@mui/material';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //

// const MyGoals = () => (
//     <MainCard >
//         <Typography variant="body1">
//             lorem ipasdqefqe
//         </Typography>
//     </MainCard>
// );
// 
import React, { useState } from 'react';
import UserService from "../../../services/UserService.js";

import './MyGoals.css';

function MyGoals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [selectedDay, setSelectedDay] = useState(''); // Selected day for filtering
  const userId = 123;
  let task = "";
  let day = "";
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddGoal = (event) => {
    event.preventDefault();

    if (newGoal.trim() !== '') {
      setGoals([...goals, { text: newGoal, day: selectedDay }]);
      setNewGoal('');
    }
    task = newGoal;
    day = selectedDay;
    let data = { userId, task, day };

    UserService.goalSave(data);
  };

  const handleRemoveGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const filteredGoals = goals.filter((goal) => !selectedDay || goal.day === selectedDay);
  // const filteredGoals1 = UserService.getGoal();
  return (
    <div className="goals-section">
      <h2>Your Daily Programming Goals</h2>
      <p>
        Set achievable goals for what you want to learn or practice today in
        your programming journey.
      </p>
      <div className="day-switcher">
        {days.map((day) => (
          <button
            key={day}
            className={selectedDay === day ? 'active' : ''}
            onClick={() => handleDayChange(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <form onSubmit={handleAddGoal}>
        <input
          type="text"
          value={newGoal}
          onChange={(event) => setNewGoal(event.target.value)}
          placeholder="Enter your goal (e.g., Learn basic syntax, Practice loops)"
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {filteredGoals.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => handleRemoveGoal(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {goals.length === 0 && (
        <p className="no-goals">No goals added yet. Start setting some!</p>
      )}
    </div>
  );
}

export default MyGoals;