import React, { useState } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import styles from './CustomTable.module.css';
import SvgIcons from '../svgIcons'; 

export default function CustomTable({ dataTable }) {
  const [filterInput, setFilterInput] = useState('');
  const columns = React.useMemo(() => dataTable.columns.map(col => ({
    ...col,
    Filter: col.Filter ? DefaultColumnFilter : () => null
  })), [dataTable]);

  const data = React.useMemo(() => dataTable.data.map(row => {
    const transformed = {};
    Object.keys(row).forEach(key => {
      if (key === 'actions') {
        transformed[key] = row[key].map(action => ({
          ...action, 
        }));
      } else {
        transformed[key] = typeof row[key] === 'object' && row[key] !== null ? row[key].value : row[key];
      }
    });
    return { ...transformed, _original: row };
  }), [dataTable]);

  const {
    getTableProps,
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter  
  );

  const handleFilterChange = e => {
    const value = e.target.value || '';
    setFilterInput(value);
    setGlobalFilter(value); 
  };
  return (
    <div className={styles['template-base']}>
      <div className={styles['table']}>
      <form action="/search" className="f-dropdown-search w-form">
          <img
            src="https://assets.website-files.com/63226e0878e701ae1e448d9e/63226e0878e701a8a2448f47_Search%20Icon%20Brand.svg"
            loading="lazy"
            alt=""
            className="f-dropdown-search-icon"
          />
          <input
            type="search"
            className="search-large w-input"
            maxLength="256"
            name="query"
            placeholder="Search"
            id="search"
            required=""
            value={filterInput}
            onChange={handleFilterChange}
          />
          <input
            type="submit"
            value="Search"
            className="f-dropdown-search-button w-button"
          />
        </form>
          {headerGroups.map(headerGroup => (
            <div className={`w-layout-grid ${styles['table-grid-top']}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <div className={styles['table-header']} {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div className={styles['table-cell']}>
                    <div className={styles['f-paragraph-small']}>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          {rows.map(row => {
            prepareRow(row);
            return (
              <div className={`w-layout-grid ${styles['table-grid']}`} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.column.id === 'actions') {
                    return (
                      <div className={styles['table-cell']} {...cell.getCellProps()}>
                        {cell.value?.map((action, index) => (
                          <SvgIcons key={index} type={action.type} onClick={action?.onClick} />
                        ))}
                      </div>
                    );
                  } else {
                    const cellData = row.original._original[cell.column.id];
                    const cellClass = typeof cellData === 'object' && cellData !== null ? cellData.class : '';
                    return (
                      <div className={styles['table-cell']} {...cell.getCellProps()}>
                        <div className={`${styles['f-paragraph-small']} ${styles[cellClass] || ''}`}>
                          {cell.render('Cell')}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function DefaultColumnFilter({
  column: { filterValue, setFilter },
}) {
  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Buscar...`}
      className="search-large w-input"
    />
  );
}