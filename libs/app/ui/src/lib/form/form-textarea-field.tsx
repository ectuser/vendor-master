import { FieldValues } from 'react-hook-form';
import { FormTextareaFieldProps } from './types';

export const FormTextareaField = <TFormData extends FieldValues>({
  name,
  register,
  error,
  label,
  ...otherProps
}: FormTextareaFieldProps<TFormData>) => (
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">{label}</span>
    </div>
    <textarea
      className={`textarea textarea-bordered h-24 max-w-xs ${
        error ? 'input-error' : null
      }`}
      {...otherProps}
      {...register(name)}
    ></textarea>
    <div className="label">
      <span className="label-text-alt">
        {error && <span className="text-red-600">{error.message}</span>}
      </span>
    </div>
  </label>
);
