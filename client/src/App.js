import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/MainContent/Home';
// Import statements remain the same
import Login from './Components/Login/Login';
import Dashboard from './Components/Login/Dashboard';
import UserRegister from './Components/Login/UserLogin'
import DoctorRegister from './Components/Login/DoctorLogin'
import Logout from './Components/Login/UserLogout';
import ChatBot from './Components/ChatBot/ChatBot';
import LinkedDoctor from './Components/Login/LinkedDoctor';
import UserProfile from './Components/Login/UserProfile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userLogin" element={<Login />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/doctorRegister" element={<DoctorRegister />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/linkeddoctor" element={<LinkedDoctor />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
export default App;