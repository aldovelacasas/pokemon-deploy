// actions.js
import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';

export function getPokemon() {
  return async function (dispatch) {
    try {
      const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=200");
      const results = response.data.results;
      const pokemonPromises = results.map(async (pokemon) => {
        const detailsResponse = await axios(pokemon.url);
        const details = detailsResponse.data;
        return {
          name: pokemon.name,
          url: pokemon.url,
          details: details,
        };
      });

      const pokemonData = await Promise.all(pokemonPromises);

      dispatch({
        type: GET_POKEMON,
        payload: {
          allPokemon: pokemonData,
          pokemonCopy: pokemonData,
        },
      });
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };
}

export function searchPokemon(name) {
  return {
    type: SEARCH_POKEMON,
    payload: name,
  };
}
