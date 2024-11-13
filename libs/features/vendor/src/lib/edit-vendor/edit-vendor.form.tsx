import { zodResolver } from '@hookform/resolvers/zod';
import { GenericForm } from '@vendor-master/ui';
import { FieldDefinition } from '@vendor-master/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const EditVendorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  name2: z.string().nullable(),
  address: z.string().min(1, 'Address is required'),
  address2: z.string().nullable(),
  zip: z.string().min(1, 'ZIP is required'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(phoneRegex, 'Invalid Number!'),
  notes: z.string().nullable(),
});

export type EditVendorFormData = z.infer<typeof EditVendorSchema>;

const vendorFields: FieldDefinition<EditVendorFormData>[] = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'name2', label: 'Name 2 (Optional)', type: 'text' },
  { name: 'address', label: 'Address', type: 'text' },
  { name: 'address2', label: 'Address 2 (Optional)', type: 'text' },
  { name: 'zip', label: 'ZIP', type: 'text' },
  { name: 'country', label: 'Country', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'text' },
  { name: 'notes', label: 'Notes', type: 'textarea' },
];

export const EditVendorForm: FC<{
  values?: EditVendorFormData;
  disableEditing?: boolean;
  submit: (data: EditVendorFormData) => unknown;
  deleteVendor: () => unknown;
}> = ({ values, submit, disableEditing, deleteVendor }) => {
  const form = useForm({
    resolver: zodResolver(EditVendorSchema),
    values: values,
  });

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <GenericForm
        fields={vendorFields}
        form={form}
        disableEditing={disableEditing}
      />

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={deleteVendor}
          disabled={disableEditing}
          className="btn btn-error mt-3"
        >
          Delete Vendor
        </button>

        <button
          disabled={disableEditing}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Save Vendor
        </button>
      </div>
    </form>
  );
};
