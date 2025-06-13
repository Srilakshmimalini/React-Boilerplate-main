import React, { useState } from 'react';
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaMoon,
  FaSignOutAlt,
  FaBars,
  FaUsers,
} from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(prev => !prev);
  };

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sidebar */}
      <aside className={`bg-white dark:bg-gray-900 shadow w-${sidebarOpen ? '64' : '20'} transition-width duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h2 className={`text-xl font-bold text-blue-600 dark:text-blue-400 ${sidebarOpen ? 'block' : 'hidden'}`}>MyApp</h2>
          <button onClick={toggleSidebar}><FaBars /></button>
        </div>
        <nav className="mt-2 space-y-2 p-2">
          {['Dashboard','Users','Products','Orders','Messages','Settings','Help'].map(section => (
            <Link key={section} to="#" className="flex items-center p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
              <FaUsers className="mr-3" />
              <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>{section}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Nav */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 outline-none focus:ring"
            />
          </div>
          <div className="flex items-center gap-4 text-lg">
            <button onClick={toggleDarkMode}><FaMoon /></button>
            <button><FaBell /></button>
            <div className="flex items-center gap-2">
              <FaUserCircle />
              <span className="font-medium">Admin</span>
            </div>
            <button onClick={handleLogout}><FaSignOutAlt /></button>
          </div>
        </header>

        {/* Main Content - Only Form Button */}
        <section className="p-6 overflow-auto space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow flex justify-center items-center">
            <Link to="/form">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition text-lg font-semibold">
                ➕ Add User Details
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center text-xs bg-white dark:bg-gray-900 shadow-inner">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Srilakshmimalini • v1.0 •{' '}
            <Link to="/privacy" className="underline">Privacy</Link> /{' '}
            <Link to="/terms" className="underline">Terms</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
