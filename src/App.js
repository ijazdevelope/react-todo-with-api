import './scss/global.css';
import Signup from './pages/auth/signup/Signup';
import Login from './pages/auth/login/Login';
import {
  Route,
  Routes
} from "react-router-dom";
import ForgetPassword from './pages/auth/forget-password/ForgetPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
