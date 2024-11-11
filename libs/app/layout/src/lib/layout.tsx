import { FC, PropsWithChildren } from 'react';
import { Header } from './header';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container p-2">{children}</main>
    </>
  );
};
