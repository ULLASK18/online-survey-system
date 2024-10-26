// App.jsx

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import SurveyHome from './components/SurveyHome';
import Result from './components/result';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="bg-background">
      {/* Set the basename to match your GitHub Pages repository */}
      <BrowserRouter basename="/online-survey-system">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<SurveyHome />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
