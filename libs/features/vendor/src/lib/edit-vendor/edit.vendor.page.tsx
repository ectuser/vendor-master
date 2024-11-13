import { Link, Navigate, redirect, useParams } from 'react-router-dom';
import {
  useDeleteVendorMutation,
  useGetVendorByIdQuery,
  useUpdateVendorMutation,
} from '@vendor-master/api';
import { NotFoundError, UnexpectedError } from '@vendor-master/ui';
import { CreateVendorFormData, VendorEditForm } from './vendor-edit.form';

export const EditVendorPage = () => {
  const params = useParams();

  const id = params.id;

  const { isLoading, error, data } = useGetVendorByIdQuery(id ?? '', {
    skip: !id,
  });
  const [deleteVendor, deleteResult] = useDeleteVendorMutation();
  const [updateVendor, updateResult] = useUpdateVendorMutation();

  if (deleteResult.isSuccess) {
    return <Navigate to="/vendors" />;
  }

  const numbId = Number(id);

  if (isNaN(numbId)) {
    return <EditUnexpectedError />;
  }

  console.log({ data });

  const handleSubmit = (data: CreateVendorFormData) => {
    updateVendor({ id: numbId, ...data });
  };

  const handleDelete = () => {
    deleteVendor(numbId);
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
      <div className="flex gap-2 flex-wrap">
        <h1>Edit Vendor {data.name}</h1>
        <button className="btn btn-error" onClick={handleDelete}>
          Delete Vendor {data.name}
        </button>
      </div>

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

      <VendorEditForm
        values={data}
        submit={handleSubmit}
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
