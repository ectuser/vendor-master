import { FieldValues } from 'react-hook-form';
import { FormInputFieldProps } from './types';

export const FormInputField = <TFormData extends FieldValues>({
  name,
  register,
  error,
  label,
  ...otherProps
}: FormInputFieldProps<TFormData>) => (
  <label className="form-control w-full sm:max-w-xs">
    <div className="label">
      <span className="label-text">{label}</span>
    </div>
    <input
      className={`input input-bordered w-full sm:max-w-xs ${
        error ? 'input-error' : null
      }`}
      {...otherProps}
      {...register(name)}
    />
    <div className="label">
      <span className="label-text-alt">
        {error && <span className="text-red-600">{error.message}</span>}
      </span>
    </div>
  </label>
);
