import React, { useEffect, useState } from "react";
// import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
// import logo from "../../assets/codenova.png";
import { BsGoogle, BsGithub, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [show, setshow] = useState(false);
  const [loginstatus, setloginstatus] = useState("");
  const [loading, setLoading] = useState(false);
  //   const { user, setUser, isUserLoggedIn } = ChatState();
  // console.log(JSON.parse(localStorage.getItem("userInfo")).data.user);
  const handleClick = () => setshow(!show);
  const login = async (e) => {
    setLoading(true);
    e.preventDefault();
    // console.log(newPassword);
    // console.log(oldPassword);
    try {
      const { data } = await axios.post(
        "https://FlagRush-Bug2-Backend.shubh-mehta.repl.co/api/v1/users/changePassword",
        {
          email: JSON.parse(localStorage.getItem("userInfo")).data.user.email,
          password: newPassword,
        }
      );
      // console.log(data);
      if (data) {
        setLoading(false);
        toast.success("Password changed successfully!", {
          autoClose: 1000,
        });
        setNewPassword("");
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong", {
        autoClose: 1000,
      });
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        {/* <img src={logo} /> */}
        <h3 className="login-welcome">Change Your Password</h3>
        <div className="login-input">
          <div className="login-password">
            {show ? (
              <AiOutlineEye className="btn-see" onClick={handleClick} />
            ) : (
              <AiOutlineEyeInvisible
                className="btn-see"
                onClick={handleClick}
              />
            )}

            <input
              type={show ? "text" : "password"}
              placeholder="New Password"
              className="login-username"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <a type="submit" className="btn-cta-orange" onClick={login}>
          {loading ? <BeatLoader color="#fff" /> : "Change Password"}
        </a>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ChangePassword;
