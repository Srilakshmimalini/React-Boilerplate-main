import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const mockUsers = [
  { email: 'admin1@example.com', password: 'admin123', role: 'admin' },
  { email: 'admin2@example.com', password: 'admin456', role: 'admin' },
  { email: 'user1@example.com', password: 'user123', role: 'user' },
  { email: 'user2@example.com', password: 'user456', role: 'user' },
];

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allowedUser = mockUsers.find(user => user.email === formData.email);

    if (!allowedUser) {
      setError('❌ Unauthorized Email. You are not allowed to register.');
      return;
    }

    if (allowedUser.role !== formData.role) {
      setError('❌ Role mismatch. Please select the correct role.');
      return;
    }

    if (allowedUser.password !== formData.password) {
      setError('❌ Password does not match the allowed record.');
      return;
    }

    localStorage.setItem('authUser', JSON.stringify(formData));
    localStorage.setItem('userRole', allowedUser.role);
    localStorage.setItem('isLoggedIn', true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Register</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-10 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors shadow-md"
          >
            Register
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
