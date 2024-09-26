import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Taskpage.css';

const CreateTaskPage = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateGiven, setDateGiven] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [priorityHigh, setPriorityHigh] = useState(false);
  const [activeTab, setActiveTab] = useState('Task');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title: taskTitle,
      description,
      dateGiven,
      deadline,
      assignedTo,
      priorityHigh,
      category: 'To Do', // Ensure to include a category if applicable
    };

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        const createdTask = await response.json();
        console.log('Task created:', createdTask);
        navigate('/dashboard'); // Redirect to the Dashboard
      } else {
        console.error('Failed to create task:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="create-task-page">
      <div className="form-container">

        <div className='taskback'>
          <img src="./Back.png" alt="Back Icon" />
          <h2>Create a Task</h2>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div className='date1'>
            <div className='label-container'>
              <label>Date Given</label>
              <div className='typography'>
                <img src="/bold.png" alt="Bold" className="bold" />
                <img src="/italic.png" alt="Italic" className="italic" />
                <img src="/underline.png" alt="Underline" className="underline" />
                <img src="/s.png" alt="Strikethrough" className="s" />
                <img src="/note.png" alt="Note" className="note" />
              </div>
            </div>
            
            <input 
              type="text" 
              placeholder="Enter a date"
              value={dateGiven} 
              onChange={(e) => setDateGiven(e.target.value)} 
            />
            
            <img src="/Clock.png" alt="Clock Icon" className="clock1" />
          </div>

          <div className='date2'>
            <label>Deadline</label>
            <input 
              type="text" 
              placeholder="Enter a date"
              value={deadline} 
              onChange={(e) => setDeadline(e.target.value)} 
            />
            <img src="/Clock.png" alt="Down Arrow" className="clock2" />
          </div>
          
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
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;
