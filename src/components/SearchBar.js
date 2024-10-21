import React from 'react'

const SearchBar = ({searchTerm,onSearch,filterCategory,onFilterCategory}) => {
  return (
    <div className="search-bar">
          <input
              type='text'
              placeholder='Search by name...'
              value={searchTerm}
              onChange={onSearch}
          />
      <select value={filterCategory} onChange={onFilterCategory} >
        <option value="">All Categories</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
      </select>
    </div>
  );
}

export default SearchBar