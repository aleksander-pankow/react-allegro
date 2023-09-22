import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import ResultCard from "./components/Results/ResultCard";
import Login from "./components/Auth/Login";
import Callback from "./components/Auth/Callback";

function App() {
    // Check if the accessToken exists (e.g., in localStorage)
    const accessToken = localStorage.getItem('accessToken');
    return (
        <Router>
            <Routes>
                {/* Protected routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<Callback />} />
                {/* Protected routes */}
                <Route path="/" element={accessToken ? <HomePage /> : <Login />} />

                {/* Error route */}
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
