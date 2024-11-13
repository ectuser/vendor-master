import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInputField } from '@vendor-master/ui';

const CreateVendorSchema = z.object({
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

export type CreateVendorFormData = z.infer<typeof CreateVendorSchema>;

export const VendorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVendorFormData>({
    resolver: zodResolver(CreateVendorSchema),
  });

  const onSubmit = (data: CreateVendorFormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInputField
        type="text"
        placeholder="Name"
        label="Name"
        name="name"
        register={register}
        error={errors.name}
      />

      <FormInputField
        type="text"
        placeholder="Name 2"
        label="Name 2 (Optional)"
        name="name2"
        register={register}
        error={errors.name2}
      />

      <FormInputField
        type="text"
        placeholder="Address"
        label="Address"
        name="address"
        register={register}
        error={errors.address}
      />

      <FormInputField
        type="text"
        placeholder="Address 2"
        label="Address 2 (Optional)"
        name="address2"
        register={register}
        error={errors.address2}
      />

      <FormInputField
        type="text"
        placeholder="ZIP"
        label="ZIP"
        name="zip"
        register={register}
        error={errors.zip}
      />

      <FormInputField
        type="text"
        placeholder="Country"
        label="Country"
        name="country"
        register={register}
        error={errors.country}
      />

      <FormInputField
        type="text"
        placeholder="City"
        label="City"
        name="city"
        register={register}
        error={errors.city}
      />

      <FormInputField
        type="email"
        placeholder="Email"
        label="Email"
        name="email"
        register={register}
        error={errors.email}
      />

      <FormInputField
        type="text"
        placeholder="Phone"
        label="Phone"
        name="phone"
        register={register}
        error={errors.phone}
      />

      <label className="form-control">
        <div className="label">
          <span className="label-text">Notes</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 max-w-xs"
          {...register('notes')}
        ></textarea>
      </label>

      <button type="submit" className="btn btn-primary mt-3">
        Save
      </button>
    </form>
  );
};
