import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
// import Navbar from "./Navbar"; // reuse your Navbar

const AdminDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/adminDashBoard" },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
    { name: "Books", icon: <FaBook />, path: "/admin/books" },
    { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {sidebarOpen && (
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Admin
            </h2>
          )}
          <button
            className="text-gray-800 dark:text-white focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md m-2 transition-colors duration-200 ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        {/* <Navbar /> */}

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
