import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ menu }) => {
  return (
    <aside className="w-64 min-h-screen bg-purple-900 text-white">
      <div className="py-6">

        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block mx-4 mb-3 rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </div>
    </aside>
  );
};

export default Sidebar;