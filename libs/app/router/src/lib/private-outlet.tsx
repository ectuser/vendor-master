import { authSlice } from '@vendor-master/auth';
import { useAppSelector } from '@vendor-master/store-utils';
import { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateOutlet = () => {
  const isLoggedIn = useAppSelector(authSlice.selectors.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export const LoginRestrictOutlet = ({ children }: { children?: ReactNode }) => {
  const isLoggedIn = useAppSelector(authSlice.selectors.isLoggedIn);
  const location = useLocation();

  const childrenExist = !!children;

  return !isLoggedIn ? (
    childrenExist ? (
      children
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};
