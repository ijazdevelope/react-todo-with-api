import './scss/global.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  Route,
  Routes
} from "react-router-dom";
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

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
