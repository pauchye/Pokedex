import React from 'react'
import { fetchAllPokemon, fetchOnePokemon } from '../util/api_util'



export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
}

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestOnePokemon = (id) => (dispatch) => (
  fetchOnePokemon(id)
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

// dispatch(requestAllPokemon())