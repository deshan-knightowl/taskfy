import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const [error, setError] = useState(null); // State to hold error message

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks'); // Updated endpoint
      if (!response.ok) throw new Error('Failed to fetch tasks'); // Check if the response is OK
      const data = await response.json();

      // Filter tasks into respective categories
      const todo = data.filter(task => task.category === 'To Do');
      const inProgress = data.filter(task => task.category === 'In Progress');
      const done = data.filter(task => task.category === 'Done');

      setTasks({ todo, inProgress, done });
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
      setError(err.message); // Set error message for display
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">
          <img src="icon button.png" alt="icon button" />
          <img src="taskfy.png" alt="logo" />
        </div>
        <div className="vertical-line"></div>
        <div className="workspace">Workspace: Knight Owl</div>
        <h2 className="dashboard-title">Task Dashboard</h2>
        <div className="user-info">Deshan Ravindra</div>
        <div className="profile">
          <img src="me.jpg" alt="profile" />
        </div>
      </header>
      {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
      <div className="task-columns">
        <div className="task-column">
          <h3>TO DO</h3>
          {tasks.todo.length > 0 ? (
            tasks.todo.map(task => (
              <div className="task-card" key={task._id}>
                <p>{task.title}</p>
                {task.priorityHigh && <img src="status.png" alt="priority" />}
              </div>
            ))
          ) : (
            <p>No tasks in this category.</p>
          )}
        </div>
        <div className="task-column">
          <h3>IN PROGRESS</h3>
          {tasks.inProgress.length > 0 ? (
            tasks.inProgress.map(task => (
              <div className="task-card" key={task._id}>
                <p>{task.title}</p>
              </div>
            ))
          ) : (
            <p>No tasks in this category.</p>
          )}
        </div>
        <div className="task-column">
          <h3>DONE</h3>
          {tasks.done.length > 0 ? (
            tasks.done.map(task => (
              <div className="task-card" key={task._id}>
                <p>{task.title}</p>
              </div>
            ))
          ) : (
            <p>No tasks in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
