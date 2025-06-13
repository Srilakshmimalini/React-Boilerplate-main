import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormData() {
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    domain: '',
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

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('formEntries')) || [];
    setEntries(stored);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.userId || !formData.domain || !formData.state || !formData.city) {
      alert('Please fill all fields!');
      return;
    }

    let updated = [...entries];
    if (editIndex !== null) {
      updated[editIndex] = formData;
      setEditIndex(null);
    } else {
      updated.push(formData);
    }

    setEntries(updated);
    localStorage.setItem('formEntries', JSON.stringify(updated));
    setFormData({ name: '', userId: '', domain: '', state: '', city: '' });
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    localStorage.setItem('formEntries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-600 text-white p-4 px-8 shadow-lg">
        <h1 className="text-xl font-bold">📋 Form Entries</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/form" className="hover:underline">New Entry</Link>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400"> User Details</h2>

        {/* Form */}
        <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleChange}
            className="p-3 border rounded dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="text"
            name="domain"
            placeholder="Domain"
            value={formData.domain}
            onChange={handleChange}
            className="p-3 border rounded dark:bg-gray-800 dark:text-white"
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="p-3 border rounded dark:bg-gray-800 dark:text-white"
            required
          >
            <option value="">Select State</option>
            {Object.keys(statesWithCities).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          {formData.state && (
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="p-3 border rounded dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select City</option>
              {statesWithCities[formData.state].map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition font-medium"
            >
              {editIndex !== null ? '✏️ Update Entry' : '➕ Add Entry'}
            </button>
          </div>
        </form>

        {/* Data Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 overflow-x-auto">
          {entries.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">No entries added yet.</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-blue-200 dark:bg-blue-800">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">User ID</th>
                  <th className="border px-4 py-2">Domain</th>
                  <th className="border px-4 py-2">State</th>
                  <th className="border px-4 py-2">City</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="text-center hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border px-4 py-2">{entry.name}</td>
                    <td className="border px-4 py-2">{entry.userId}</td>
                    <td className="border px-4 py-2">{entry.domain}</td>
                    <td className="border px-4 py-2">{entry.state}</td>
                    <td className="border px-4 py-2">{entry.city}</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleRemove(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
