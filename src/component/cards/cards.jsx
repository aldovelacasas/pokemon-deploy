/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import Card from "../card/card"

function Cards({ allPokemon }) {
    console.log(allPokemon);
    return (
      <div>
        {allPokemon.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            details={pokemon.details}
          />
        ))}
      </div>
    );
  }

  export default Cards
