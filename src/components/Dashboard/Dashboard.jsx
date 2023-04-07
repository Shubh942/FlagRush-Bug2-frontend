import React from "react";
import ChangePassword from "../ChangePassword/ChangePassword";
import { Link } from "react-router-dom";
import MainContent from "../MainContent/MainContent";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userInfo")).data.user.email ===
      "user2@gmail.com"
    ) {
      alert("Ctf solved");
    }
  }, []);
  return (
    <div>
      <Link exact="true" to="/changePassword" className="login-forgot-link">
        <h1>Change Password</h1>
      </Link>
      <MainContent />
    </div>
  );
};

export default Dashboard;
