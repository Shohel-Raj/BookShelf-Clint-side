import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router";

const AdminDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/adminDashBoard" },
    { name: "Books", icon: <FaBook />, path: "/adminDashBoard/books" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div>
          {/* Header */}
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

          {/* Menu Links */}
          <nav className="mt-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/adminDashBoard"} // 👈 ensures exact match
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
        </div>

        {/* Back Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-3 w-full p-3 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all ${
              sidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaArrowLeft />
            {sidebarOpen && <span>Back to Home</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
