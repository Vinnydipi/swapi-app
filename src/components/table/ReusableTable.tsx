import React from 'react';
import './ResuableTable.css';

interface ReusableTableProps<T> {
  columns: string[];
  data: T[] | null;
  propertyMap: { [key: string]: (item: T) => React.ReactNode };
}

const ReusableTable = <T extends object>({ columns, data, propertyMap }: ReusableTableProps<T>) => {
  return (
    <div className='table-container'>
      <table className='resuable-table'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, rowIdx) => (
            <tr key={rowIdx}>
              {columns.map((property, colIdx) => (
                <td key={colIdx}>{propertyMap[property](item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
