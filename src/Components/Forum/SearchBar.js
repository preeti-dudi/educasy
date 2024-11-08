// src/Components/Forum/SearchBar.js

import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search in the forum..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
