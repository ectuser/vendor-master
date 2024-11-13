import { z } from 'zod';

export const VendorSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Name is required'),
  name2: z.string().nullable(),
  address: z.string().min(1, 'Address is required'),
  address2: z.string().nullable(),
  zip: z.string().min(1, 'ZIP is required'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone is required'),
  notes: z.string().nullable(),
});

export type Vendor = z.infer<typeof VendorSchema>;
