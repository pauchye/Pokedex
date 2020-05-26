import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (previousState = {}, action) => {
    Object.freeze(previousState);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
          const receiveAllPokeState = {};
          Object.keys(action.pokemon).forEach(pokeId => {
            let { id, name, image_url } = action.pokemon[pokeId];
            receiveAllPokeState[id]  = {
              id,
              name,
              image_url
            }
          })
          return receiveAllPokeState;
        default:
            return previousState; 
    }
}

export default pokemonReducer