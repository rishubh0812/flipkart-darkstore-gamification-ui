import React from 'react';
import './Filters.css';

const Filters = ({ options, selectedOption, onFilterChange }) => {
  return (
    <div className="filters-container">
      <select value={selectedOption} onChange={(e) => onFilterChange('option', e.target.value)}>
        <option value={options[0]}>{options[0]}</option>
        {options.slice(1).map((Option) => (
          <option key={Option} value={Option}>{Option}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
