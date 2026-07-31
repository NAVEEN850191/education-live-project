// src/components/Layout.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children, menu = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="h-16 bg-purple-700 text-white flex items-center justify-between px-8 shadow-md z-10 shrink-0">
        <h1 className="text-xl font-bold tracking-wide">
          Education Management System
        </h1>
        <button
          onClick={handleLogout}
          className="bg-white/20 hover:bg-white/30 text-white text-sm px-5 py-1.5 rounded-full transition font-medium border border-white/20 cursor-pointer"
        >
          Logout
        </button>
      </header>

      {/* Body Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-purple-900 text-white flex flex-col p-4 shadow-xl shrink-0">
          <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider px-4 mb-3">
            Admin Menu
          </div>
          <nav className="flex flex-col gap-2">
            {menu.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-white/20 text-white font-semibold shadow-sm"
                      : "text-purple-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Workspace Area */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;