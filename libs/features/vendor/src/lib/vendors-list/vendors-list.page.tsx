import { Link } from 'react-router-dom';
import { VendorsTable } from './vendors-table';
import { useGetVendorsQuery } from '@vendor-master/api';

export const VendorsListPage = () => {
  const { isLoading, data, error } = useGetVendorsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="prose mt-5">
      <div className="flex gap-5">
        <h1>Vendors</h1>
        <Link to="new">
          <button className="btn btn-primary">Create new</button>
        </Link>
      </div>

      <div className="mt-5">
        <VendorsTable vendors={data} />
      </div>
    </div>
  );
};
