import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import logo from "../img/logo (1).svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveLoginDetails } from '../slice/AdminSlice';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loginData = useSelector((myAllState) => {
    return myAllState.loginStore.adminDetails;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(
        "https://rss-feed-node-js.onrender.com/api/backend/adminAuth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            adminName: username,
            adminPassword: password,
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        // Store admin info in Redux and cookies
        dispatch(saveLoginDetails({ admin: data.admin }));
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (loginData) {
      navigate("/dashboard");
    }
  }, [loginData]);

  return (
    <div className="bg-[#F5F7FF] w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] py-5 bg-white px-[50px]  ">
        <img src={logo} alt="" width={180} className="mb-5" />
        <h3 className="text-black text-[16px] font-[400]">
          Sign in to continue.
        </h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="adminName"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className=" mt-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]"
            placeholder="Username"
          />
          <input
            type="password"
            name="adminPassword"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className=" mt-6 mb-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
