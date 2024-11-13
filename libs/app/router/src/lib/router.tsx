import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { AuthLayout } from '@vendor-master/layout';
import {
  CrateVendorPage,
  EditVendorPage,
  ViewVendorPage,
  VendorsListPage,
} from '@vendor-master/vendor';

import { LoginPage } from '@vendor-master/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/vendors" replace />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'vendors',
    handle: {
      crumb: () => <Link to="/vendors">Vendors</Link>,
    },
    children: [
      {
        path: '',
        element: (
          <AuthLayout>
            <VendorsListPage />
          </AuthLayout>
        ),
      },
      {
        path: 'edit/:id',
        element: (
          <AuthLayout>
            <EditVendorPage />
          </AuthLayout>
        ),
        handle: {
          crumb: () => <Link to="/vendors/edit">Edit Vendor</Link>,
        },
      },
      {
        path: 'view/:id',
        element: (
          <AuthLayout>
            <ViewVendorPage />
          </AuthLayout>
        ),
        handle: {
          crumb: () => <Link to="/vendors/view">View Vendor</Link>,
        },
      },
      {
        path: 'new',
        element: (
          <AuthLayout>
            <CrateVendorPage />
          </AuthLayout>
        ),
        handle: {
          crumb: () => <Link to="/vendors/new">Create Vendor</Link>,
        },
      },
    ],
  },
  {
    path: 'bank-accounts',
    element: (
      <AuthLayout>
        <div>Hello world! 123</div>
      </AuthLayout>
    ),
  },
  {
    path: 'contact-people',
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
