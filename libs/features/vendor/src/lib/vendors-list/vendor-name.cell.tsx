import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { CellContext } from '@tanstack/react-table';
import { useDeleteVendorMutation } from '@vendor-master/api';
import { Vendor } from '@vendor-master/schema';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const VendorNameCell: FC<{ info: CellContext<Vendor, string> }> = ({
  info,
}) => {
  const [deleteVendor, deleteVendorResult] = useDeleteVendorMutation();

  const handleDeleteVendor = () => {
    deleteVendor(info.row.original.id);
  };

  return (
    <span className="flex items-center gap-1">
      <Link to={`view/${info.row.original.id}`}>{info.getValue()}</Link>
      {deleteVendorResult.isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : null}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-sm btn-ghost p-1">
          <EllipsisVerticalIcon className="size-6" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to={`edit/${info.row.original.id}`} className="btn btn-sm">
              Edit vendor
            </Link>
          </li>
          <li>
            <button
              className="btn btn-sm btn-error"
              onClick={handleDeleteVendor}
              disabled={deleteVendorResult.isLoading}
            >
              Delete Vendor
            </button>
          </li>
        </ul>
      </div>
    </span>
  );
};
