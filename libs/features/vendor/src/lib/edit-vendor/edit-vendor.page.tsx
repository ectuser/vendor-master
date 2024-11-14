import { Link, Navigate, useParams } from 'react-router-dom';
import {
  useDeleteVendorMutation,
  useGetVendorByIdQuery,
  useUpdateVendorMutation,
} from '@vendor-master/api';
import { NotFoundError, UnexpectedError } from '@vendor-master/ui';
import { EditVendorFormData, EditVendorForm } from './edit-vendor.form';
import { useToast } from '@vendor-master/toast';

export const EditVendorPage = () => {
  const params = useParams();

  const id = params.id;

  const { isLoading, error, data } = useGetVendorByIdQuery(id ?? '', {
    skip: !id,
  });
  const [deleteVendor, deleteResult] = useDeleteVendorMutation();
  const [updateVendor, updateResult] = useUpdateVendorMutation();

  const { showToast } = useToast();

  if (deleteResult.isSuccess) {
    return <Navigate to="/vendors" />;
  }

  const numbId = Number(id);

  if (isNaN(numbId)) {
    return <EditUnexpectedError />;
  }

  const handleSubmit = (data: EditVendorFormData) => {
    updateVendor({ id: numbId, ...data }).then((res) => {
      if (!res.error) {
        showToast('Vendor successfully updated', 'success');
      }
    });
  };

  const handleDelete = () => {
    deleteVendor(numbId).then((res) => {
      if (!res.error) {
        showToast('Vendor successfully deleted', 'success');
      }
    });
  };

  if (isLoading || updateResult.isLoading || deleteResult.isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    if ('status' in error && error.status === 404) {
      return <EditNotFoundError />;
    }

    return <EditUnexpectedError />;
  }

  if (!data) {
    return <EditUnexpectedError />;
  }

  return (
    <div className="prose">
      <h1>Edit Vendor {data.name}</h1>

      {updateResult.isSuccess ? (
        <div role="alert" className="alert alert-success">
          <span>Vendor successfully updated</span>
        </div>
      ) : null}

      {updateResult.isError ? (
        <div role="alert" className="alert alert-error">
          <span>
            Vendor update failed: {JSON.stringify(updateResult.error)}
          </span>
        </div>
      ) : null}

      {deleteResult.isError ? (
        <div role="alert" className="alert alert-error">
          <span>
            Vendor delete failed: {JSON.stringify(updateResult.error)}
          </span>
        </div>
      ) : null}

      <EditVendorForm
        values={data}
        submit={handleSubmit}
        deleteVendor={handleDelete}
        disableEditing={updateResult.isLoading || deleteResult.isLoading}
      />
    </div>
  );
};

const EditNotFoundError = () => {
  return (
    <NotFoundError>
      <Link to="/vendors" className="link">
        Vendors page
      </Link>{' '}
    </NotFoundError>
  );
};

const EditUnexpectedError = () => {
  return (
    <UnexpectedError>
      <Link to="/vendors" className="link">
        Vendors page
      </Link>{' '}
    </UnexpectedError>
  );
};
