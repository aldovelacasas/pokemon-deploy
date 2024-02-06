/* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/rules-of-hooks */
// import Navbar from "../../component/navbar/navbar"
// import Cards from "../../component/cards/cards"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getPokemon } from "../../redux/actions"

// export default function home() {
//     const dispatch = useDispatch();
//     const allPokemon = useSelector((state) => state.pokemonCopy);
//     console.log("home", allPokemon);
    
//     useEffect(() => {
//       dispatch(getPokemon());
//     }, [dispatch]);
  
//     return (
//       <div>
//         <Navbar />
//         <Cards allPokemon={allPokemon} />
//       </div>
//     );
//   }


// import React, { useEffect, useState } from 'react';
// import Navbar from '../../component/navbar/navbar';
// import Cards from '../../component/cards/cards';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPokemon } from '../../redux/actions';
// import "./home.css"

// export default function Home() {
//   const dispatch = useDispatch();
//   const allPokemon = useSelector((state) => state.pokemonCopy);
//   const itemsPerPage = 12;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalItems = allPokemon.length;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = allPokemon.slice(indexOfFirstItem, indexOfLastItem);

//   const nextPage = () => {
//     if (indexOfLastItem < totalItems) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   useEffect(() => {
//     dispatch(getPokemon());
//   }, [dispatch]);
  
//   return (
//     <div>
//       <Navbar />
//       <Cards allPokemon={currentItems} />
//       <div className="container">
//         <button
//           className="custom-cursor"
//           onClick={prevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>{currentPage}</span>
//         <button
//           className="custom-cursor"
//           onClick={nextPage}
//           disabled={indexOfLastItem >= totalItems}
//         >
//           Next
//         </button>
//       </div>

//     </div>
//   );
// }










import React, { useEffect, useState } from 'react';
import Navbar from '../../component/navbar/navbar';
import Cards from '../../component/cards/cards';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/actions';
import "./home.css"

export default function Home() {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemonCopy);
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = allPokemon.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allPokemon.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < totalItems) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  
  return (
    <div className="home-container">
      <Navbar />
      <div className="pagination-container">
        <button
          className="custom-cursor pagination-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          className="custom-cursor pagination-button"
          onClick={nextPage}
          disabled={indexOfLastItem >= totalItems}
        >
          Next
        </button>
      </div>
<Cards allPokemon={currentItems} />
    </div>
  );
}
