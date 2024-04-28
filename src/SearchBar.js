// SearchBar.js
import React from 'react';

function SearchBar({ setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
