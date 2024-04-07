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
      className={styles['f-paragraph-small']}
    />
  );
}

export default function CustomTable({ dataTable }) {
  const columns = React.useMemo(() => dataTable.columns.map(col => ({
    ...col,
    Filter: col.Filter ? DefaultColumnFilter : () => null
  })), [dataTable]);

  const data = React.useMemo(() => dataTable.data.map(row => {
    // Transforma los datos si es necesario para incluir campos de clase
    const transformed = {};
    Object.keys(row).forEach(key => {
      transformed[key] = typeof row[key] === 'object' && row[key] !== null ? row[key].value : row[key];
    });
    return { ...transformed, _original: row };
  }), [dataTable]);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters 
  );

  return (
    <div className={styles['template-base']}>
      <div className={styles['table']}>
          <div className={`w-layout-grid ${styles['table-grid-top']}`}>
            {headerGroups.map(headerGroup => (
              headerGroup.headers.map(column => (
                <div className={styles['table-header']} {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div className={styles['table-cell']}>
                    <div className={styles['f-paragraph-small']}>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </div>
                </div>
              ))
            ))}
          </div>
          {rows.map(row => {
            prepareRow(row);
            return (
              <div className={`w-layout-grid ${styles['table-grid']}`} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  const cellData = row.original._original[cell.column.id];
                  const cellClass = typeof cellData === 'object' && cellData !== null ? cellData.class : '';
                  return (
                    <div className={styles['table-cell']} {...cell.getCellProps()}>
                      <div className={`${styles['f-paragraph-small']} ${styles[cellClass] || ''}`}>
                        {cell.render('Cell')}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
