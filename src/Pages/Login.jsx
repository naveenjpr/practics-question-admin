import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import logo from "../img/logo (1).svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveLoginDetails } from "../slice/AdminSlice";

function Login() {
  // start false so page doesn't show full-page loader on first render
  const [loading, setLoading] = useState(false);

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
    // show loading state on button
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If already logged in, redirect
    if (loginData) {
      navigate("/dashboard");
    }
    // no fake initial loading delay here
  }, [loginData, navigate]);

  return (
    <div className="bg-[#F5F7FF] w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] py-5 bg-white px-[50px]  ">
        <img src={logo} alt="logo" width={180} className="mb-5" />
        <h3 className="text-black text-[16px] font-[400]">Sign in to continue.</h3>

        {error && (
          <p className="text-red-500 text-sm mt-3">
            {error}
          </p>
        )}

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="adminName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" mt-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="adminPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" mt-6 mb-5 px-7 text-[16px] focus:outline-blue-400 w-full h-[50px] border border-1 border-[#c5c0c0]"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            aria-disabled={loading}
            className={`w-full text-white py-3 rounded transition mt-4
              ${loading ? "bg-blue-400 cursor-not-allowed opacity-90" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                {/* simple spinner */}
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span>Logging in...</span>
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
