import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { AuthLayout } from '@vendor-master/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/vendors" replace />,
  },
  {
    path: '/vendors',
    element: (
      <AuthLayout>
        <div>Hello world! 123</div>
      </AuthLayout>
    ),
  },
  {
    path: '/bank-accounts',
    element: (
      <AuthLayout>
        <div>Hello world! 123</div>
      </AuthLayout>
    ),
  },
  {
    path: '/contact-people',
    element: (
      <AuthLayout>
        <div>Hello world! 123</div>
      </AuthLayout>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/vendors" replace />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
