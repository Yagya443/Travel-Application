import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Navbar from "./Components/Navbar";
import Planner from "./Pages/Planner/Planner";
import Audit from "./Pages/Audit/Audit";
import Dashboard from "./Pages/Overview/Dashboard";
import Journey from "./Pages/Journey/Journey";
import TripPlan from "./Pages/TripPlan/TripPlan";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/audit" element={<Audit />} />
                    <Route path="/planner" element={<Planner />} />
                    <Route path="/overview" element={<Dashboard />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/tripplan/:tripId" element={<TripPlan />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
