import { FC, PropsWithChildren } from 'react';
import { Header } from './header';
import { Breadcrumbs } from './breadcrumb';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <main className="content-container py-2">
        <Breadcrumbs />
        <Outlet />
      </main>
    </>
  );
};
