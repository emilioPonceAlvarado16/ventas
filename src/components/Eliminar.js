import { useState } from 'react';

const DummyDataComponent = ({ itemsPerPage }) => {
  // Datos de prueba
  const dummyData = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <ul>
        {currentItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={dummyData.length}
        paginate={paginate}
      />
    </div>
  );
};

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <a 
            onClick={() => currentPage > 1 && handlePaginationClick(currentPage - 1)} 
            className='page-link'>&laquo;</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => handlePaginationClick(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a 
            onClick={() => currentPage < totalPages && handlePaginationClick(currentPage + 1)} 
            className='page-link'>&raquo;</a>
        </li>
      </ul>
    </nav>
  );
};

export default DummyDataComponent;
