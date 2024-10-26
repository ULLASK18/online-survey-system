// App.jsx

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './Signup';        // Load Signup component here
import Login from './Login';
import SurveyHome from './components/SurveyHome';
import Result from './components/result';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter basename="/online-survey-system">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />  {/* Use Signup here */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<SurveyHome />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
