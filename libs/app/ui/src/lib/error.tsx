import { FC, PropsWithChildren } from 'react';

export const NotFoundError: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="prose">
      <h1>Oops.. 404</h1>
      The page you’re looking for isn’t available. Please follow the link to the{' '}
      {children}
    </div>
  );
};

export const UnexpectedError: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="prose">
      <h1>Unexpected error</h1>
      Unexpected error happened. Please follow the link to the {children}
    </div>
  );
};
