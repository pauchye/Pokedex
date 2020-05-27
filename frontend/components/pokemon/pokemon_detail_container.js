import { connect } from 'react-redux'; 
import PokemonDetail from './pokemon_detail';


const mapStateToProps = state => ({    
    pokemon: selectAllPokemon(state)
    
});

  const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);