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
import {
  AdminOutlet,
  LoginRestrictOutlet,
  PrivateOutlet,
} from './private-outlet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/vendors" replace />,
  },
  {
    path: 'login',
    element: (
      <LoginRestrictOutlet>
        <LoginPage />
      </LoginRestrictOutlet>
    ),
  },
  {
    path: 'vendors',
    handle: {
      crumb: () => <Link to="/vendors">Vendors</Link>,
    },
    element: <PrivateOutlet />,
    children: [
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: '',
            element: <VendorsListPage />,
          },
          {
            path: 'edit/:id',
            element: (
              <AdminOutlet>
                <EditVendorPage />
              </AdminOutlet>
            ),
            handle: {
              crumb: () => <Link to="/vendors/edit">Edit Vendor</Link>,
            },
          },
          {
            path: 'view/:id',
            element: <ViewVendorPage />,
            handle: {
              crumb: () => <Link to="/vendors/view">View Vendor</Link>,
            },
          },
          {
            path: 'new',
            element: (
              <AdminOutlet>
                <CrateVendorPage />
              </AdminOutlet>
            ),
            handle: {
              crumb: () => <Link to="/vendors/new">Create Vendor</Link>,
            },
          },
        ],
      },
    ],
  },
  {
    path: 'bank-accounts',
    element: <PrivateOutlet />,
    children: [
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: '',
            element: <div>Under development...</div>,
          },
        ],
      },
    ],
  },
  {
    path: 'contact-people',
    element: <PrivateOutlet />,
    children: [
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: '',
            element: <div>Under development...</div>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/vendors" replace />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
