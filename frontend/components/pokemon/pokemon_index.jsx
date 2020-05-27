import React from 'react';
import ReactRedux from 'react-redux';
import { PokemonIndexItem } from './pokemon_index_item'


class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.requestAllPokemon()//thunk action
  };

  render() {
    const pokemon = this.props.pokemon; 
    return(
      <div>
      <ul>
        {pokemon.map(poke => {
          return <PokemonIndexItem key={poke.id} pokemon={poke} />
        })}
      </ul>
    </div>
    )
  }
}

export default PokemonIndex;