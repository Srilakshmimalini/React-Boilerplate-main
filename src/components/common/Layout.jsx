// src/components/common/Layout.jsx
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the current route's component */}
      </main>

      
      {/* Notification system */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: 'font-sans',
          success: {
            iconTheme: { primary: '#10B981', secondary: 'white' },
          },
          error: {
            iconTheme: { primary: '#EF4444', secondary: 'white' },
          },
        }}
      />
    </div>
  );
}