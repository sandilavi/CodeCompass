import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import "./global.css";
import Home from "./components/login/Home";
import Quiz from "./components/userEvaluate/Quiz";
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
