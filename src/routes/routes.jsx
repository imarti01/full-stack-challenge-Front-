import { Suspense, lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { createBrowserRouter } from 'react-router-dom';

const AuthLayout = lazy(() => import('../views/layouts/AuthLayout/AuthLayout'));
const MainLayout = lazy(() => import('../views/layouts/MainLayout/MainLayout'));
const MainPage = lazy(() => import('../views/pages/MainPage'));
const LoginPage = lazy(() => import('../views/pages/LoginPage'));
const RegisterPage = lazy(() => import('../views/pages/RegisterPage'));
const DashboardPage = lazy(() => import('../views/pages/DashboardPage'));
const TagFilterResults = lazy(() =>
  import('../views/components/MainPage/TagFilterResults/TagFilterResults')
);
const UploadPage = lazy(() => import('../views/pages/UploadPage'));
const PrivateRoute = lazy(() => import('../routes/PrivateRoute'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Skeleton count={20} />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Skeleton count={20} />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/:tag',
        element: (
          <Suspense fallback={<Skeleton count={20} />}>
            <TagFilterResults />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<Skeleton count={20} />}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Skeleton count={20} />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/login',
        element: (
          <Suspense fallback={<Skeleton count={20} />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: '/login/signup',
        element: (
          <Suspense fallback={<Skeleton count={20} />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/uploadGif',
    element: (
      <Suspense fallback={<Skeleton count={20} />}>
        <PrivateRoute>
          <UploadPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);
