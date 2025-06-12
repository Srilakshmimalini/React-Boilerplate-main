import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const mockUsers = [
    { email: 'admin1@example.com', password: 'admin123', role: 'admin' },
    { email: 'admin2@example.com', password: 'admin456', role: 'admin' },
    { email: 'user1@example.com', password: 'user123', role: 'user' },
    { email: 'user2@example.com', password: 'user456', role: 'user' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedUser = mockUsers.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      // Save role to localStorage or context if needed
      localStorage.setItem('userRole', matchedUser.role);
      localStorage.setItem('isLoggedIn', true);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
        <div className="text-center">
          <HiLockClosed className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-2" />
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors shadow-md"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
          <Link to="/" className="inline-block mt-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
