import React from 'react';
import ReactRedux from 'react-redux';


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
          return(
          <li key={poke.id}>
            {poke.name}: 
            <img src={poke.image_url} height="25" width="25"/>
          </li>
        )})}
      </ul>
    </div>
    )
  }
}

export default PokemonIndex;