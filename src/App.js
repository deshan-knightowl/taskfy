import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTaskPage from './Components/Taskpage/Taskpage.jsx'; // Make sure to import your Taskpage component

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-task" element={<CreateTaskPage/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
