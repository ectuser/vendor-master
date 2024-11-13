import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Vendor } from '@vendor-master/schema';

export const vendorApi = createApi({
  reducerPath: 'vendorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:31299/vendors' }),
  tagTypes: ['Vendors'],
  endpoints: (builder) => ({
    getVendorById: builder.query<Vendor, string>({
      query: (id) => id,
      providesTags: (result, error, id) => [{ type: 'Vendors', id }],
    }),
    addVendor: builder.mutation<Vendor, Omit<Vendor, 'id'>>({
      query(body) {
        return {
          url: '',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Vendors' }],
    }),
    updateVendor: builder.mutation<Vendor, Partial<Vendor>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),

      invalidatesTags: (result, error, { id }) => [{ type: 'Vendors', id }],
    }),
    deleteVendor: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Vendors', id }],
    }),
  }),
});

export const {
  useGetVendorByIdQuery,
  useUpdateVendorMutation,
  useDeleteVendorMutation,
  useAddVendorMutation,
} = vendorApi;
