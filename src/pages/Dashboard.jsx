import React, { useState, useEffect } from 'react';
import {
  FaRocket,
  FaBell,
  FaUserCircle,
  FaSearch,
  FaMoon,
  FaSignOutAlt,
  FaBars,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaClipboardList,
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

  // example data
  const widgets = [
    { icon: <FaUsers />, label: 'Total Users', value: '1,234' },
    { icon: <FaDollarSign />, label: 'Total Sales', value: '$56,789' },
    { icon: <FaChartLine />, label: 'Active Sessions', value: '123' },
    { icon: <FaClipboardList />, label: 'Tasks Completed', value: '45%' },
  ];

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
            <input type="text" placeholder="Search..." className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 outline-none focus:ring" />
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

        {/* Dashboard Content */}
        <section className="p-6 overflow-auto space-y-6">
          {/* Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {widgets.map((w,i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600 dark:text-blue-400 text-3xl">{w.icon}</div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{w.label}</p>
                    <h3 className="text-2xl font-bold">{w.value}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">[Line Chart]</div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">[Bar Chart]</div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {['ID','User','Amount','Status'].map(head => (
                    <th key={head} className="p-3 text-left">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, user: 'Alice', amount: '$100', status: 'Completed' },
                  { id: 2, user: 'Bob', amount: '$75', status: 'Pending' },
                ].map(row => (
                  <tr key={row.id} className="border-b dark:border-gray-700">
                    <td className="p-3">{row.id}</td>
                    <td className="p-3">{row.user}</td>
                    <td className="p-3">{row.amount}</td>
                    <td className="p-3">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow flex flex-wrap gap-4">
            {['Add User','Add Product','Generate Report','Download CSV','Schedule Event'].map(action => (
              <button key={action} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">{action}</button>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center text-xs bg-white dark:bg-gray-900 shadow-inner">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Srilakshmimalini • v1.0 • <Link to="/privacy" className="underline">Privacy</Link> / <Link to="/terms" className="underline">Terms</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
