//App.jsx

import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import SurveyHome from './components/SurveyHome';
import Result from './components/result';

function App() {
  return (
    <div className='bg-background'>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<SurveyHome/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;