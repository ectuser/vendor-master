import { useGetVendorByIdQuery } from '@vendor-master/api';
import { NotFoundError, UnexpectedError } from '@vendor-master/ui';
import { Link, useParams } from 'react-router-dom';
import { ViewVendorForm } from './view-vendor.form';

export const ViewVendorPage = () => {
  const params = useParams();

  const id = params.id;

  const { isLoading, error, data } = useGetVendorByIdQuery(id ?? '', {
    skip: !id,
  });

  const numbId = Number(id);

  if (isNaN(numbId)) {
    return <EditUnexpectedError />;
  }

  if (isLoading) {
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
      <h1>View vendor - {data.name}</h1>

      <ViewVendorForm values={data} />
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
