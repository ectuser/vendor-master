import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type FormFieldProps<TFormData extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    error: FieldError | undefined;
    name: Path<TFormData>;
    register: UseFormRegister<TFormData>;
    label: string;
  };
