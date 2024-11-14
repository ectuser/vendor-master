import { useAddVendorMutation } from '@vendor-master/api';
import { EditVendorFormData } from '../edit-vendor/edit-vendor.form';
import { VendorCreateForm } from './create-vendor.form';
import { Navigate } from 'react-router-dom';
import { useToast } from '@vendor-master/toast';

export const CrateVendorPage = () => {
  const [addVendor, addVendorResult] = useAddVendorMutation();
  const { showToast } = useToast();

  const handleSubmit = (data: EditVendorFormData) => {
    addVendor(data).then((res) => {
      if (!res.error) {
        showToast('Vendor successfully created', 'success');
      }
    });
  };

  if (addVendorResult.isSuccess) {
    return <Navigate to="/vendors" />;
  }

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

      <VendorCreateForm
        submit={handleSubmit}
        disableEditing={addVendorResult.isLoading}
      />
    </div>
  );
};
