import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Vendor } from '@vendor-master/schema';
import { FC } from 'react';
import { VendorNameCell } from './vendor-name.cell';

const columnHelper = createColumnHelper<Vendor>();

const columns = [
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => <VendorNameCell info={info} />,
  }),
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('phone', {
    header: () => 'Phone',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('address', {
    header: () => 'Address',
    cell: (info) => info.renderValue(),
  }),
];

export const VendorsTable: FC<{
  vendors: Vendor[];
}> = ({ vendors }) => {
  const table = useReactTable({
    data: vendors,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
