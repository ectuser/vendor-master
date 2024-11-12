import { FC, PropsWithChildren } from 'react';
import { Header } from './header';
import { Breadcrumbs } from './breadcrumb';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content-container py-2">
        <Breadcrumbs />
        {children}
      </main>
    </>
  );
};
