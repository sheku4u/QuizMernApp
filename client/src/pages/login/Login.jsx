import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.data) {
        throw new Error("Login failed. no data recieved");
      }
      setEmail("");
      setPassword("");
      toast.success(response.data.message);
      navigateTo("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div style={{ width: "80vw" }}>
      <div>
        <h1>QUIZZIE</h1>
        <div>
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
