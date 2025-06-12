// src/components/common/Navbar.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              YourLogo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
              }
            >
              Home
            </NavLink>
            
            {/* Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <span>Resources</span>
                <FaChevronDown className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Documentation
                  </Link>
                  <Link to="/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tutorials
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}