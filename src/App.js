import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTaskForm from './Components/Taskpage/Taskpage.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <div>


    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                
            </Routes>
        </Router>
    </div>

    
  );
}

export default App;
