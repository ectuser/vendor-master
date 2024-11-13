import { zodResolver } from '@hookform/resolvers/zod';
import { GenericForm } from '@vendor-master/ui';
import { FieldDefinition } from '@vendor-master/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const ViewVendorSchema = z.object({
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

export type ViewVendorFormData = z.infer<typeof ViewVendorSchema>;

const vendorFields: FieldDefinition<ViewVendorFormData>[] = [
  { name: 'name', label: 'Name', type: 'text', disabled: true },
  { name: 'name2', label: 'Name 2 (Optional)', type: 'text', disabled: true },
  { name: 'address', label: 'Address', type: 'text', disabled: true },
  {
    name: 'address2',
    label: 'Address 2 (Optional)',
    type: 'text',
    disabled: true,
  },
  { name: 'zip', label: 'ZIP', type: 'text', disabled: true },
  { name: 'country', label: 'Country', type: 'text', disabled: true },
  { name: 'city', label: 'City', type: 'text', disabled: true },
  { name: 'email', label: 'Email', type: 'email', disabled: true },
  { name: 'phone', label: 'Phone', type: 'text', disabled: true },
  { name: 'notes', label: 'Notes', type: 'textarea', disabled: true },
];

export const ViewVendorForm: FC<{
  values?: ViewVendorFormData;
}> = ({ values }) => {
  const form = useForm({
    resolver: zodResolver(ViewVendorSchema),
    values: values,
  });

  return (
    <GenericForm fields={vendorFields} form={form} disableEditing={true} />
  );
};
