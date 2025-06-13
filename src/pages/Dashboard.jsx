// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaWpforms,
  FaHome,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data (mock)
    localStorage.removeItem('authUser');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-all">

      {/* Sidebar */}
      <aside className={`bg-white dark:bg-gray-900 shadow-lg w-64 p-4 space-y-6 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <FaHome /> Dashboard
        </h2>
        <nav className="space-y-4">
          <button
            onClick={() => navigate('/form')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full"
          >
            <FaWpforms /> Go to Form
          </button>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg w-full">
            <FaUser /> Profile
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
          <div className="flex items-center gap-4">
            <button
              className="text-xl md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, User</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-4">Dashboard Overview</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            This is your dashboard where you can access different features. Click the button below to open the form.
          </p>

          <button
            onClick={() => navigate('/form')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold"
          >
            ➕ Fill Out Form
          </button>
        </main>
      </div>
    </div>
  );
}
