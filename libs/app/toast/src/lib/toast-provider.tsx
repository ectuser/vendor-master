import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { ToastModel, ToastType } from './toast.model';
import { ToastContainer } from './toast-container';
import { ToastContext } from './toast-context';

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const handleShowToast = useCallback(
    (message: string, type: ToastType = 'info') => {
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    },
    []
  );

  const handleRemoveToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={handleRemoveToast} />
    </ToastContext.Provider>
  );
};
