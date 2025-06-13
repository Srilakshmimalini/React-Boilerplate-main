import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Shared layout and UI
import Layout from '../components/common/Layout';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorPage from '../pages/ErrorPage';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const FormPage = lazy(() => import('../pages/FormPage'));
const FormData = lazy(() => import('../pages/FormData')); // ✅ Visualize + Add/Remove entries
const ProtectedRoute = lazy(() => import('../components/auth/ProtectedRoute'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'form',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FormPage />
          </Suspense>
        ),
      },
      {
        path: 'form-data',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FormData />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
