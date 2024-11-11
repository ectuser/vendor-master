import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthLayout } from '@vendor-master/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthLayout>
        <div>Hello world! 123</div>
      </AuthLayout>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
