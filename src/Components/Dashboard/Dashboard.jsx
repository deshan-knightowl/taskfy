// Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const tasks = {
    todo: [
      { id: 1, title: 'Integrate Crowdin webhook to notify translators', category: 'Refactoring',priority:<img src="status.png" alt='priority' />, code: 'FC-7' },
      { id: 2, title: 'See actual overusage price for next download', code: 'BC-14' },
      { id: 3, title: 'Use multiplied limits for team license owners', code: 'BC-11' },
      { id: 4, title: 'Font SCSS mixin does not recognize fallback for font-family', code: 'FC-9' },
      { id: 5, title: 'Iterate nuxt-i18n in product-developers project', category: 'Refactoring',priority:<img src="status.png" alt='priority' />, code: 'FC-8' },
    ],
    inProgress: [
      { id: 6, title: 'See status of uploaded materials', code: 'DB-14' },
      { id: 7, title: 'Replace JustComments with something', code: 'FC-19' },
      { id: 8, title: 'See my limits as a manual licensed user', code: 'BC-8' },
    ],
    done: [
      { id: 9, title: 'Access Intercom help center', code: 'FC-13' },
      { id: 10, title: 'Remove requests to ipify service from frontend', code: 'FC-17' },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">
            <img src="icon button.png" alt="icon button" />
            <img src="taskfy.png" alt="logo" />
        </div>
        <div className="vertical-line"></div>
        <div className="workspace">Workspace : Knight Owl</div>
        <h2 className="dashboard-title">Task Dashboard</h2>
        <div className="user-info">Deshan Ravindra</div>
        <div className="profile">
        <img  src="me.jpg" alt="profile" />
        </div>
      </header>
      <div className="task-columns">
        <div className="task-column">
          <h3>TO DO</h3>
          {tasks.todo.map(task => (
            <div className="task-card" key={task.id}>
              <p>{task.title}</p>
              {task.category && <span className="task-category">{task.category}</span>}
              <div className="task-code1">
                <div>{task.priority}</div> {task.code} </div>
            </div>
          ))}
        </div>
        <div className="task-column">
          <h3>IN PROGRESS</h3>
          {tasks.inProgress.map(task => (
            <div className="task-card" key={task.id}>
              <p>{task.title}</p>
              <div className="task-code2">{task.code}</div>
            </div>
          ))}
        </div>
        <div className="task-column">
          <h3>DONE</h3>
          {tasks.done.map(task => (
            <div className="task-card" key={task.id}>
              <p>{task.title}</p>
              <div className="task-code2">{task.code}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
