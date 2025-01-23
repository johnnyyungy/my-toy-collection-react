import React from 'react';
import SearchBar from './SearchBar'; // Correct import path

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header>
      <a href="#" className="logo">
        <img src="images/logo.png" alt="Logo" />
      </a>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Use SearchBar */}
    </header>
  );
}

export default Header;