import { GenericForm } from '@vendor-master/ui';
import { FieldDefinition } from '@vendor-master/ui';
import { FC } from 'react';
import { z } from 'zod';

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const CreateVendorSchema = z.object({
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

export type CreateVendorFormData = z.infer<typeof CreateVendorSchema>;

const vendorFields: FieldDefinition<CreateVendorFormData>[] = [
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

export const VendorCreateForm: FC<{
  values?: CreateVendorFormData;
  disableEditing?: boolean;
  submit: (data: CreateVendorFormData) => unknown;
}> = ({ values, submit, disableEditing }) => {
  return (
    <GenericForm
      schema={CreateVendorSchema}
      fields={vendorFields}
      initialValues={values}
      onSubmit={submit}
      disableEditing={disableEditing}
    />
  );
};
