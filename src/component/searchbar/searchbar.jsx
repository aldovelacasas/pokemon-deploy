/* eslint-disable no-unused-vars */
// searchbar.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../redux/actions';  // Importa la acción de búsqueda
import "./searchbar.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault()

    dispatch(searchPokemon(name));  // Llama a la acción de búsqueda al hacer clic en el botón
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar por nombre de Pokémon"
        value={name}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
