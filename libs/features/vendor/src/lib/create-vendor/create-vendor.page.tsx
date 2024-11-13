import { useAddVendorMutation } from '@vendor-master/api';
import { CreateVendorFormData } from '../edit-vendor/vendor-edit.form';
import { VendorCreateForm } from './vendor-create.form';
import { Navigate } from 'react-router-dom';

export const CrateVendorPage = () => {
  const [addVendor, addVendorResult] = useAddVendorMutation();

  if (addVendorResult.isSuccess) {
    return <Navigate to="/vendors" />;
  }

  const handleSubmit = (data: CreateVendorFormData) => {
    addVendor(data);
  };

  if (addVendorResult.isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="prose">
      <h1>Create new vendor</h1>

      {addVendorResult.isError ? (
        <div role="alert" className="alert alert-error">
          <span>
            Vendor creation failed: {JSON.stringify(addVendorResult.error)}
          </span>
        </div>
      ) : null}

      <VendorCreateForm submit={handleSubmit} disableEditing={false} />
    </div>
  );
};
