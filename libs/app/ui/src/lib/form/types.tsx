import {
  DefaultValues,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { ZodType } from 'zod';

export type FieldType = 'text' | 'email' | 'textarea' | 'number' | 'password';

export type FieldDefinition<T> = {
  name: keyof T;
  label: string;
  type: FieldType;
  options?: { value: string | number; label: string }[];
  disabled?: boolean;
};

export type FormProps<T extends Record<string, any>> = {
  schema: ZodType<T>;
  fields: FieldDefinition<T>[];
  initialValues?: DefaultValues<T>;
  onSubmit: (data: T) => void;
  disableEditing?: boolean;
};

export type FormInputFieldProps<TFormData extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    error: FieldError | undefined;
    name: Path<TFormData>;
    register: UseFormRegister<TFormData>;
    label: string;
  };

export type FormTextareaFieldProps<TFormData extends FieldValues> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error: FieldError | undefined;
    name: Path<TFormData>;
    register: UseFormRegister<TFormData>;
    label: string;
  };
