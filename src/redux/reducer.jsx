// reducers.js
import { GET_POKEMON, SEARCH_POKEMON } from './actions';

const initialState = {
  allPokemon: [],
  pokemonCopy: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemon: action.payload.allPokemon,
        pokemonCopy: state.allPokemon,
        
      };
    case SEARCH_POKEMON:
      console.log(action.payload);
      return {
        ...state,
        pokemonCopy: state.allPokemon.filter(p=>p.name.includes(action.payload.toLowerCase()))
        // currentPokemon: state.allPokemon.filter(p=>p.name=="pikachu");

        
      };
    default:
      return state;
  }
}

export default rootReducer;
