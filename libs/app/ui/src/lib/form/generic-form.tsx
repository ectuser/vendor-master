import { useForm } from 'react-hook-form';
import { FormInputField } from './form-input-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProps } from './types';
import { FormTextareaField } from './form-textarea-field';

export const GenericForm = <T extends Record<string, any>>({
  schema,
  fields,
  initialValues,
  onSubmit,
  disableEditing,
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        const fieldError = errors[field.name as keyof typeof errors];

        switch (field.type) {
          case 'text':
          case 'email':
          case 'number':
          case 'password':
            return (
              <FormInputField
                key={field.name as string}
                type={field.type}
                label={field.label}
                name={field.name as string}
                register={register as any}
                disabled={disableEditing || field.disabled}
                error={fieldError as any}
              />
            );
          case 'textarea':
            return (
              <FormTextareaField
                key={field.name as string}
                label={field.label}
                name={field.name as string}
                register={register as any}
                disabled={disableEditing || field.disabled}
                error={fieldError as any}
              />
            );
          default:
            return null;
        }
      })}
      <button
        disabled={disableEditing}
        type="submit"
        className="btn btn-primary mt-3"
      >
        Save
      </button>
    </form>
  );
};
