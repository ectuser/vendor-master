import { FormInputField } from './form-input-field';
import { FormProps } from './types';
import { FormTextareaField } from './form-textarea-field';

export const GenericForm = <T extends Record<string, any>>({
  form,
  fields,
  disableEditing,
}: FormProps<T>) => {
  const errors = form.formState.errors;

  return (
    <div>
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
                name={field.name as any}
                register={form.register}
                disabled={disableEditing || field.disabled}
                error={fieldError as any}
              />
            );
          case 'textarea':
            return (
              <FormTextareaField
                key={field.name as string}
                label={field.label}
                name={field.name as any}
                register={form.register}
                disabled={disableEditing || field.disabled}
                error={fieldError as any}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
