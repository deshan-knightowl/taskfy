import React, { useState } from 'react';
import './Taskpage.css';

const CreateTaskPage = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateGiven, setDateGiven] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [priorityHigh, setPriorityHigh] = useState(false);
  const [activeTab, setActiveTab] = useState('Task');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="create-task-page">
      <div className="form-container">

        <div className='taskback'>
        <img src="./Back.png" alt="Back Icon" />
        <h2>Create a Task</h2>
        </div>

        <label>Title</label>
        <input 
          type="text" 
          placeholder="Name of Task" 
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          maxLength="30"
        />
        <span className="word-count">{taskTitle.length}/30</span>

<div className="tabs">
      <button 
        type="button" 
        className={activeTab === 'Task' ? 'active' : ''} 
        onClick={() => setActiveTab('Task')}
      >
        Task
      </button>
      <button 
        type="button" 
        className={activeTab === 'Issue' ? 'active' : ''} 
        onClick={() => setActiveTab('Issue')}
      >
        Issue
      </button>
    </div>

        <label>Description</label>
        <textarea 
          placeholder="Details about event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Date Given</label>
        <input 
          type="date" 
          value={dateGiven} 
          onChange={(e) => setDateGiven(e.target.value)} 
        />

        <label>Deadline</label>
        <input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
        />

        <label>Assigned to:</label>
        <div className='down-icon'>
        <input 
          type="email" 
          placeholder="Enter assignee Email" 
          value={assignedTo} 
          onChange={(e) => setAssignedTo(e.target.value)} 
        />
        <img src="/Icon.png" alt="Down Arrow" className="icon" />
        </div>

        <div className="priority">
          <input 
            type="checkbox" 
            checked={priorityHigh} 
            onChange={(e) => setPriorityHigh(e.target.checked)} 
          />
          <label>Priority High</label>
        </div>
        

        <div className="buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="create-btn">Create Task</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
