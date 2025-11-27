import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulated authentication (use a ref so we can clear it on unmount)
      timerRef.current = setTimeout(() => {
        if (form.username === "admin" && form.password === "charis123") {
          localStorage.setItem("adminToken", "sample-jwt-token");
          navigate("/admin/dashboard");
        } else {
          setError("Invalid username or password");
        }
        setLoading(false);
      }, 1500);
    } catch {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // clear any pending timers when component unmounts
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Charis Logo" className="w-24 mb-2" />
          <h1 className="text-2xl font-semibold text-primary">
            Admin Portal Login
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Charis Microfinance Bank Ltd
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              {/* User icon (inline SVG to avoid external dependency) */}
              <svg
                className="absolute left-3 top-3 text-gray-400"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                placeholder="Enter admin username"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              {/* Lock icon (inline SVG) */}
              <svg
                className="absolute left-3 top-3 text-gray-400"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-medium transition disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>

      <p className="text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Charis Microfinance Bank Ltd. All rights
        reserved.
      </p>
    </div>
  );
}
