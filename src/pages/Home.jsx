import { Link } from 'react-router-dom';
import { FaRocket, FaLaptopCode, FaMoon, FaPuzzlePiece, FaRoute, FaBolt, FaCodeBranch } from 'react-icons/fa';

export default function Home() {
  const features = [
    { title: 'Responsive Design', icon: <FaLaptopCode /> },
    { title: 'Dark Mode Support', icon: <FaMoon /> },
    { title: 'Reusable Components', icon: <FaPuzzlePiece /> },
    { title: 'Routing Ready', icon: <FaRoute /> },
    { title: 'Optimized Performance', icon: <FaBolt /> },
    { title: 'Clean Codebase', icon: <FaCodeBranch /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 backdrop-blur bg-opacity-80">
        <div className="flex items-center gap-2 text-2xl font-extrabold text-blue-600 dark:text-blue-400">
          <FaRocket className="text-blue-500" />
          <span>BoilerPlate</span>
        </div>
        <div className="space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link 
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-6">
          Basic React Frontend Application
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10">
          A modern, production-ready template powered by React, Tailwind CSS & Vite to jumpstart your projects with speed and style.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
            Learn More
          </Link>
          <Link to="/login" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md">
            Get Started
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-2xl mb-4 shadow-md">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A brief explanation about this feature in your boilerplate.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 dark:bg-blue-700 text-white py-16 px-6 text-center rounded-b-3xl">
        <h3 className="text-4xl font-bold mb-4">Join Thousands of Developers</h3>
        <p className="text-lg mb-6">Create your next big project with confidence.</p>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-md"
        >
          Start Now
        </Link>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="px-6 py-20 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {['Speed & Simplicity', 'Scalable & Customizable'].map((card, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
                {card}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Experience a clean development setup that grows with your project.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Srilakshmimalini. All rights reserved.</p>
      </footer>
    </div>
  );
}
