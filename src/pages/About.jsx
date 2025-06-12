import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserTie, FaBullseye, FaUsers, FaHeart, FaCode, FaAward, FaFacebook, FaLinkedin, FaTwitter
} from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 backdrop-blur bg-opacity-80">
        <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">About Us</div>
        <div className="space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow">
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="text-center px-4 py-20 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-gray-700 dark:to-gray-900 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Who We Are</h1>
        <p className="text-lg max-w-3xl mx-auto">Empowering developers to build faster with modern tools and design systems.</p>
      </header>

      {/* MISSION & VISION */}
      <section className="px-6 py-14 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Our Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 shadow w-full max-w-md">
            <FaBullseye className="text-3xl mb-2 text-blue-600 dark:text-blue-300 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>To simplify and accelerate frontend development with powerful boilerplate tools.</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-6 shadow w-full max-w-md">
            <FaUsers className="text-3xl mb-2 text-purple-600 dark:text-purple-300 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>Creating a global community of developers building with speed, elegance, and confidence.</p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-14 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">📖 Our Story</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300">
          What started as a weekend side project has now evolved into a full-fledged open-source starter kit used by developers worldwide. We believe in the power of clean UI and code organization.
        </p>
      </section>

      {/* TEAM */}
      <section className="px-6 py-14 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">👨‍💻 Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Srilakshmimalini V", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Marushini B", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Monika M", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Harini M", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Joshna Kumari", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Vennila R", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Deepthi S", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Divyasri  J", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Divya", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Vaishnavi M", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Joshnsi Joy", role: "Intern", social: ["facebook", "linkedin"] },
            { name: "Agalya M", role: "Intern", social: ["facebook", "linkedin"] },
          ].map((member, i) => (
            <div key={i} className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow max-w-xs">
              <FaUserTie className="text-5xl mx-auto text-blue-600 dark:text-blue-300 mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                {member.social.includes("facebook") && <FaFacebook />}
                {member.social.includes("linkedin") && <FaLinkedin />}
                {member.social.includes("twitter") && <FaTwitter />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 py-14 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">💎 Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <FaHeart />, title: "Passion" },
            { icon: <FaCode />, title: "Clean Code" },
            { icon: <FaUsers />, title: "Community" },
            { icon: <FaAward />, title: "Excellence" },
          ].map((val, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow">
              <div className="text-3xl text-blue-500 dark:text-blue-300 mb-3 mx-auto">{val.icon}</div>
              <h4 className="font-semibold">{val.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES / WHAT WE DO */}
      <section className="px-6 py-14 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">🔧 What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Responsive UI Components", "Dashboard Templates", "Authentication Setup",
            "Routing and Lazy Loading", "Theme & Dark Mode", "Performance Optimization"
          ].map((feature, i) => (
            <div key={i} className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md">
              <p className="font-medium text-blue-700 dark:text-blue-300">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-6 py-14 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">⚙️ Technologies Used</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-6">
          Our stack is handpicked to support performance and scalability.
        </p>
        <div className="flex justify-center flex-wrap gap-8 text-xl font-medium">
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Vite</span>
          <span>React Router</span>
          <span>React Icons</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 dark:bg-gray-900 py-6 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} Built  using React + Tailwind</p>
      </footer>
    </div>
  );
}
