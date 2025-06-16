import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaUser,
  FaIdBadge,
  FaCode,
  FaMapMarkerAlt,
  FaCity,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    domain: '',
    dob: '',
    state: '',
    city: '',
  });

  const statesWithCities = {
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Tirupattur'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Karnataka: ['Bengaluru', 'Mysuru', 'Mangalore'],
    Kerala: ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
    AndhraPradesh: ['Vijayawada', 'Visakhapatnam', 'Guntur'],
  };

  const [selectedState, setSelectedState] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setFormData({ ...formData, state, city: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('formEntries')) || [];
    const updated = [...existing, formData];
    localStorage.setItem('formEntries', JSON.stringify(updated));
    navigate('/form-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-600 text-white p-4 px-8 shadow-lg">
        <h1 className="text-xl font-bold">📝 UserForm</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/form-data" className="hover:underline">View Data</Link>
        </div>
      </nav>

      {/* Form */}
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-2xl space-y-6 w-full max-w-2xl transition-all"
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
            User Details Form
          </h2>

          <div className="flex items-center gap-2">
            <FaUser className="text-blue-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaIdBadge className="text-blue-500" />
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={formData.userId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaCode className="text-blue-500" />
            <input
              type="text"
              name="domain"
              placeholder="Domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* DOB Field */}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <select
              onChange={handleStateChange}
              value={selectedState}
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              required
            >
              <option value="">-- Select State --</option>
              {Object.keys(statesWithCities).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {selectedState && (
            <div className="flex items-center gap-2">
              <FaCity className="text-blue-500" />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="">-- Select City --</option>
                {statesWithCities[selectedState].map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium tracking-wide"
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
  );
}
