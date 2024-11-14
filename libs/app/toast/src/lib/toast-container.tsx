import { FC } from 'react';
import { Toast } from './toast';
import { ToastModel } from './toast.model';

export type ToastContainerProps = {
  toasts: ToastModel[];
  removeToast: (id: number) => unknown;
};

export const ToastContainer: FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div className="toast toast-top toast-end">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};
