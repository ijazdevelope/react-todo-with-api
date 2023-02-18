import './scss/global.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  Route,
  Routes
} from "react-router-dom";
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import { useState } from 'react';

const App = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Login isVisible={isVisible} setVisible={setVisible} />} />
      <Route path="/signup" element={<Signup isVisible={isVisible} setVisible={setVisible} />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword isVisible={isVisible} setVisible={setVisible} />} />
    </Routes>
  );
}

export default App;
