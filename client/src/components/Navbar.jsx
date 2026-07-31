import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-400 shadow-lg flex items-center justify-between px-6">
      <h1 className="text-white text-3xl font-bold">
        Education Management System
      </h1>

      <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30">
        Logout
      </button>
    </header>
  );
};

export default Navbar;