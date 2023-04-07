import { useState } from "react";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ChangePassword from "./components/ChangePassword/ChangePassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="changePassword" element={<ChangePassword />} />
      </Routes>

      {/* <Login /> */}
    </div>
  );
}

export default App;
