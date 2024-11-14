export type ToastModel = {
  id: number;
  message: string;
  type: ToastType;
};

export type ToastType = 'info' | 'success' | 'error';
