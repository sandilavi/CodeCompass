import React, { useState, useEffect } from 'react';
import UserService from "../../../services/UserService.js";

import './MyGoals.css';

function MyGoals() {
  const [goals, setGoals] = useState([]);
  //const [goalsTuesday, setGoalsTuesday] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [selectedDay, setSelectedDay] = useState(''); // Selected day for filtering


  const userId = JSON.parse(localStorage.getItem('id'));
  let task = "";
  let day = "";
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddGoal = (event) => {
    event.preventDefault();

    if (newGoal.trim() !== '') {
      setGoals([...goals, { text: newGoal, day: selectedDay }]);
      setNewGoal('');
      setSelectedDay(selectedDay);
    }
    task = newGoal;
    day = selectedDay;
    let data = { userId, task, day };

    UserService.goalSave(data);
  };

  const handleRemoveGoal = (index) => {
    console.log("aa" + index);
    UserService.removeGoal(index);
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    console.log("res.data")
    if (selectedDay === "Monday") {
      UserService.getMonday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
    } else if (selectedDay == "Tuesday") {
      UserService.getTuesday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
    } else if (selectedDay == "Wednesday") {
      UserService.getWednesday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
    } else if (selectedDay == "Thursday") {
      UserService.getThursday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
    }else if (selectedDay == "Friday") {
      UserService.getFriday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
      } else if (selectedDay == "Saturday") {
      UserService.getSaturday(userId)
        .then((res) => {
          setGoals(res.data);
          console.log(res.data)
        })


        .catch((error) => {
          console.error('Error fetching goals:', error);
        });
      }else if (selectedDay == "Sunday") {
        UserService.getSunday(userId)
          .then((res) => {
            setGoals(res.data);
            console.log(res.data)
          })
  
  
          .catch((error) => {
            console.error('Error fetching goals:', error);
          });
        }  
  }, [selectedDay, goals]);


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

        {filteredGoals.map((goals, index) => (
          <li key={index}>

            {goals.task}
            <button onClick={() => handleRemoveGoal(goals.id)}>Remove</button>
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