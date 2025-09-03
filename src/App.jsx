import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import PracticePage from "./pages/PracticePage";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />}>
        {/* Nested Routes will render inside <Outlet /> of Home */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="practice" element={<PracticePage/>} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
