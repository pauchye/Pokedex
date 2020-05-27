import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({pokemon}) => { 
  return(  
    <Link to={`/pokemon/${pokemon.id}`}>
    <li key={pokemon.id}>
      {pokemon.id} - 
      {pokemon.name}:
      <img src={pokemon.image_url} height="25" width="25" />
    </li>
    </Link>
  )
}