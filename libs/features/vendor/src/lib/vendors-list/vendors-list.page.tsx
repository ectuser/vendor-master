import { Link } from 'react-router-dom';

export const VendorsListPage = () => {
  return (
    <div className="prose mt-5">
      <div className="flex gap-5">
        <h1>Vendors</h1>
        <Link to="new">
          <button className="btn btn-primary">Create new</button>
        </Link>
      </div>
    </div>
  );
};
