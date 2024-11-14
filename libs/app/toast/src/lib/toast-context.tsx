import { createContext, useContext } from 'react';
import { ToastType } from './toast.model';

export const ToastContext = createContext<{
  showToast: (message: string, type: ToastType) => unknown;
} | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Use ToastContext inside ToastProvider');
  }

  return context;
};
