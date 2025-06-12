import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}