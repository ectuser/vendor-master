import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { AuthLayout } from '@vendor-master/layout';
import { CrateVendorPage, VendorsListPage } from '@vendor-master/vendor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/vendors" replace />,
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
            <div>Edit</div>
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
            <div>View</div>
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
