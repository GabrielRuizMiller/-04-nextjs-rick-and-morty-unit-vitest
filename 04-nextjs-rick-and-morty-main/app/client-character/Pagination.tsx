import React from 'react';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  path: string;
  onNavigate: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage, path, onNavigate }) => {
  return (
    <div>
      {currentPage > 1 && (
        <button onClick={() => onNavigate(currentPage - 1)}>Prev</button>
      )}
      <span>{currentPage} of {lastPage}</span>
      {currentPage < lastPage && (
        <button onClick={() => onNavigate(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};
