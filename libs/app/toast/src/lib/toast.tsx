import React, { FC, useEffect } from 'react';
import { ToastModel } from './toast.model';

export type ToastProps = {
  toast: ToastModel;
  removeToast: (id: number) => unknown;
};

export const Toast: FC<ToastProps> = ({ toast, removeToast }) => {
  const { id, message, type } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
    </div>
  );
};
