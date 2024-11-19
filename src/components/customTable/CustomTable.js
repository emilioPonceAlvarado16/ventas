// src/components/CustomTable.js

import React, { useState, useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import styles from './CustomTable.module.css';
import SvgIcons from '../svgIcons'; 
import { v4 as uuidv4 } from 'uuid'; // Importar uuid

// Función para transformar cada fila de datos
const transformRow = (row) => {
  const transformed = {};
  Object.keys(row).forEach((key) => {
    if (key === 'actions') {
      transformed[key] = row[key].map((action) => ({
        ...action,
        id: uuidv4(), // Asignar un ID único a cada acción
      }));
    } else {
      transformed[key] =
        typeof row[key] === 'object' && row[key] !== null
          ? row[key].value
          : row[key];
    }
  });
  return { ...transformed, _original: row, id: uuidv4() }; // Asignar un ID único a cada fila
};

// Función de filtro por defecto para columnas
function DefaultColumnFilter({
  column: { filterValue, setFilter },
}) {
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value || undefined)}
      placeholder={`Buscar...`}
      className="search-large w-input"
    />
  );
}

export default function CustomTable({ dataTable }) {
  const [filterInput, setFilterInput] = useState('');

  // Definir columnas con filtros
  const columns = useMemo(() => dataTable.columns.map((col) => ({
    ...col,
    Filter: col.Filter ? DefaultColumnFilter : () => null,
  })), [dataTable]);

  // Transformar datos y asignar IDs únicos
  const data = useMemo(() => dataTable.data.map(transformRow), [dataTable]);

  // Configuración de la tabla
  const {
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter  
  );

  // Manejar cambios en el filtro global
  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setFilterInput(value);
    setGlobalFilter(value); 
  };

  // Renderizar el componente
  return (
    <div className={styles['template-base']}>
      <div className={styles['table']}>
        {/* Formulario de búsqueda */}
        <form
          onSubmit={(event) => event.preventDefault()}
          className="f-dropdown-search w-form"
        >
          <img
            src="https://assets.website-files.com/63226e0878e701ae1e448d9e/63226e0878e701a8a2448f47_Search%20Icon%20Brand.svg"
            loading="lazy"
            alt="Icono de búsqueda"
            className="f-dropdown-search-icon"
          />
          <input
            type="search"
            className="search-large w-input"
            maxLength="256"
            name="query"
            placeholder="Search"
            id="search"
            required
            value={filterInput}
            onChange={handleFilterChange}
          />
          <input
            type="submit"
            value="Search"
            className="f-dropdown-search-button w-button"
          />
        </form>

        {/* Renderizar encabezados de la tabla */}
        {headerGroups.map((headerGroup) => (
          <div
            className={`w-layout-grid ${styles['table-grid-top']}`}
            {...headerGroup.getHeaderGroupProps()}
            key={uuidv4()} // Asignar clave única al headerGroup
          >
            {headerGroup.headers.map((column) => (
              <div
                className={styles['table-header']}
                {...column.getHeaderProps()}
                key={`${column.id}-${uuidv4()}`} // Asignar clave única a cada header
              >
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

        {/* Renderizar filas de la tabla */}
        {rows.map((row) => {
          prepareRow(row);
          return (
            <div
              className={`w-layout-grid ${styles['table-grid']}`}
              {...row.getRowProps()}
              key={row.original.id} // Usar el ID único de la fila
            >
              {row.cells.map((cell) => {
                if (cell.column.id === 'actions') {
                  return (
                    <div
                      className={styles['table-cell']}
                      {...cell.getCellProps()}
                      key={`${row.original.id}-actions`} // Clave única para la celda de acciones
                    >
                      {cell.value?.map((action) => (
                        <SvgIcons
                          key={action.id} // Usar el ID único de la acción
                          type={action.type}
                          onClick={action?.onClick}
                        />
                      ))}
                    </div>
                  );
                } else {
                  const cellData = row.original._original[cell.column.id];
                  const cellClass =
                    typeof cellData === 'object' && cellData !== null
                      ? cellData.class
                      : '';
                  return (
                    <div
                      className={styles['table-cell']}
                      {...cell.getCellProps()}
                      key={`${row.original.id}-${cell.column.id}`} // Clave única para la celda
                    >
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
