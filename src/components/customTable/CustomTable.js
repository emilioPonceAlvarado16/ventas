import React from 'react';
import { useTable, useFilters } from 'react-table';
import styles from './CustomTable.module.css';

function DefaultColumnFilter({
  column: { filterValue, setFilter },
}) {
  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Buscar...`}
    />
  );
}

export default function CustomTable({ dataTable }) {
  const columns = React.useMemo(() => dataTable.columns.map(col => ({
    ...col,
    Filter: col.Filter ? DefaultColumnFilter : () => null 
  })), [dataTable]);

  const data = React.useMemo(() => dataTable.data, [dataTable]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters // Usar el hook de filtros
  );

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
