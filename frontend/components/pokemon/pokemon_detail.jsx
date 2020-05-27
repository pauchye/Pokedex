import React from 'react';
import ReactRedux from 'react-redux';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon()//thunk action
  };

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <ul>
          <PokemonDetailItem key={pokemon.id} pokemon={pokemon} />
        </ul>
      </div>
    )
  }
}

export default PokemonDetail;