import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router'; // Make sure the path is correct
import './assets/styles/main.css'; // Global styles

const App = () => {
  useEffect(() => {
    console.log('App mounted');
    // Optional global logic
  }, []);

  return (
    <div className="app">
      {/* You can wrap this with ErrorBoundary in production */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
