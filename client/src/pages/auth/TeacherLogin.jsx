// src/pages/auth/TeacherLogin.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Login:", formData);
    navigate("/teacher/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Teacher Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-98 text-white font-medium shadow-md transition text-sm mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/admin/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Admin Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;